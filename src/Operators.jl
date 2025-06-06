module OperatorsModule
# XXX: Should generalize this so there is just one struct operators with a type
#   parameter for the number of inputs

using Lux: Chain, Dense, relu, Lux
using ComponentArrays: ComponentArray
using DispatchDoctor: @stable
using DynamicExpressions: DynamicExpressions
using Random: MersenneTwister
using SymbolicRegression: get_metadata, with_metadata, OperatorEnum
# TODO: Cannot actually change the network architecture right now.
# TODO: Generalize the arity of these. One class all all arities.
# TODO: The activation function used biases the learning A LOT.
#   Make this a parameter for SR?

# ================== Learnable Operator ================== #

_lop_counter = Dict{Int, Int}()  # Is this a bad idea?

"""A learned operator with an internal Lux neural net"""
struct Lop{N,M,P} <: Function where {N}
    """Simply to mark different operators in printing."""
    index::Int

    """The Lux model skeleton"""
    model::M

    """The parameters (and state) used in the Lux model. The state is very likely unused."""
    params_and_state::P
end

# Define the keyword constructor
function Lop{N}(
    model;
    index::Union{Int, Nothing} = nothing,
    params_and_state = nothing,
) where {N}
    if !(0 < N <= 2)
        throw(ArgumentError("only arities of 1 or 2 currently supported, not $N"))
    end
    # Validate the model.
    if hasfield(typeof(model), :in_dims)
        # E.g., Dense(2, 1)
        model_arity = model.in_dims
        model_coarity = model.out_dims
    else
        # E.g., Chain(Dense(2, 1))
        model_arity = model.layers[begin].in_dims
        model_coarity = model.layers[end].out_dims
    end
    if model_arity != N
        throw(ArgumentError("model arity ($model_arity) must match operator arity ($N)"))
    end
    if model_coarity != 1
        throw(ArgumentError("model must output a single value, not $model_coarity"))
    end
    # Auto-index the operator if an index is not passed. Maybe a bad idea.
    index = @something index let
        _lop_counter[N] = get(_lop_counter, N, 0) + 1
    end
    # Initialize the Lux model parameters and state.
    params_and_state = @something params_and_state let
        let rng = MersenneTwister(0)
            (p, s) = Lux.setup(rng, model)
            (ComponentArray(p), s)
        end
    end
    # Return the learnable operator.
    return Lop{N, typeof(model), typeof(params_and_state)}(
        index, model, params_and_state
    )
end

# Add trait for operator arity
struct OperatorArity{n} end
OperatorArity(n::Int) = OperatorArity{n}()
# Helper function to get operator type
operator_arity(::Lop{N}) where {N} = OperatorArity{N}()

# So it prints the index with appropriate prefix based on n_input
Base.show(io::IO, op::Lop) = show(io, operator_arity(op), op)
Base.show(io::IO, ::OperatorArity{1}, op::Lop) = print(io, "UnaOp[$(op.index)]")
Base.show(io::IO, ::OperatorArity{2}, op::Lop) = print(io, "BinOp[$(op.index)]")
Base.show(io::IO, ::OperatorArity{n}, op::Lop) where {n} = print(io, "Op$(n)[$(op.index)]")

# Overload call: takes N numbers, returns one number
@inline function (op::Lop{N})(args::Float32...) where {N}
    return _call_lop(op, args...)
end
@inline @stable function _call_lop(op::Lop{N}, args::Float32...) where {N}
    @assert length(args) == N "Operator expects $N inputs but got $(length(args))"
    params, state = op.params_and_state
    out, _ = op.model(collect(args), params, state)
    #= neural net state is not relevant, so we ignore it =#
    return only(out)
end

# ================== DE Optimizations ================== #
# TODO: Override the other eval functions from Evaluate.jl in DE.

function DynamicExpressions.EvaluateModule.deg1_eval(
    cumulator::AbstractVector{T}, op::Lop{1}, ::DynamicExpressions.EvalOptions{false}
) where {T}
    params, state = op.params_and_state
    out, _ = op.model(cumulator', params, state)
    cumulator[:] .= out[:]
    return DynamicExpressions.EvaluateModule.ResultOk(cumulator, true)
end

function DynamicExpressions.EvaluateModule.deg2_eval(
    cumulator_l::AbstractVector{T},
    cumulator_r::AbstractVector{T},
    op::Lop{2},
    ::DynamicExpressions.EvalOptions{false},
) where {T}
    params, state = op.params_and_state
    input = [cumulator_l'; cumulator_r']  # 2×N matrix
    out, _ = op.model(input, params, state)
    cumulator_l[:] .= out[:]
    return DynamicExpressions.EvaluateModule.ResultOk(cumulator_l, true)
end

# ================== Utils ================== #
#=
Since SR.jl expects operators to be immutable, we can't actually evolve parameters
directly; we have to store parameters in the expression, and then unpack those
parameters into _new_ operators which are forwarded to the evaluation function.

We define a helper function to do this unpacking.
`f` here is an expression object. Expression objects
store operators in their metadata (access with `get_metadata`
and set with `with_metadata`). So, here, we just need to
update these operators before evaluation.
=#
# TODO: Move to TemplateExpressionUtils?
# TODO: should just take expr, params, and operators?

@inline function set_params(expr, una_params, bin_params; operators=nothing)
    operators = @something operators let
        # First, we need to inject the parameters:
        unaops = get_metadata(expr).operators.unaops
        binops = get_metadata(expr).operators.binops

        # now we can build the new operator:
        new_unaops = ntuple(
            i -> let
                old_una_params, old_una_state = unaops[i].params_and_state
                new_una_params = deepcopy(old_una_params)
                new_una_state = deepcopy(old_una_state)
                new_una_params[:] .= una_params[i][:]

                Lop{1}(
                    deepcopy(unaops[i].model);  # XXX: Is deepcopy really needed here?
                    index=i, params_and_state=(new_una_params, new_una_state)
                )
            end,
            Val(length(unaops)),
        )
        # now we can build the new operator:
        new_binops = ntuple(
            i -> let
                old_bin_params, old_bin_state = binops[i].params_and_state
                new_bin_params = deepcopy(old_bin_params)
                new_bin_state = deepcopy(old_bin_state)
                new_bin_params[:] .= bin_params[i][:]

                Lop{2}(
                    deepcopy(binops[i].model);  # XXX: Is deepcopy really needed here?
                    index=i, params_and_state=(new_bin_params, new_bin_state)
                )
            end,
            Val(length(binops)),
        )
        OperatorEnum(new_binops, new_unaops)
    end

    # Return `f`, but with the new operators
    return with_metadata(
        expr;
        operators=operators,
        eval_options=DynamicExpressions.EvalOptions(use_fused=Val(false))
        # ^ Avoid some "optimizations" that are slower with these operators.
    )
end

end  # OperatorsModule