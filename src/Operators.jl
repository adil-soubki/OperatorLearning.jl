module OperatorsModule
# XXX: Should generalize this so there is just one struct operators with a type
#   parameter for the number of inputs

using Lux: Chain, Dense, relu, Lux
using ComponentArrays: ComponentArray
using DispatchDoctor: @stable
using DynamicExpressions: DynamicExpressions
using Random: MersenneTwister

Base.@kwdef struct BinOp{M,P} <: Function
    """Simply to mark different operators in printing."""
    index::Int = 1

    """The number of hidden units in the dense layers"""
    n_hidden::Int = 16

    """The number of dense hidden layers"""
    n_layers::Int = 0

    """The Lux model skeleton"""
    model::M = Chain(              # Equivalent to nn.Sequential
        Dense(2, n_hidden, relu),  # Equivalent to [nn.Linear, nn.ReLU]
        (Dense(n_hidden, n_hidden, relu) for _ in 1:n_layers)...,
        Dense(n_hidden, 1),
    )

    """The parameters (and state) used in the Lux model. The state is very likely unused."""
    params_and_state::P = let rng = MersenneTwister(0)
        (p, s) = Lux.setup(rng, model)
        (ComponentArray(p), s)
    end
end

# So it prints the index
Base.show(io::IO, op::BinOp) = print(io, "BinOp[$(op.index)]")

# Overload call: takes two numbers, returns one number
@inline function (op::BinOp)(x::Float32, y::Float32)
    return _call_binop(op, x, y)
end
@inline @stable function _call_binop(op::BinOp, x::Float32, y::Float32)
    params, state = op.params_and_state
    out, _ = op.model([x; y;;], params, state)
    #= neural net state is not relevant, so we ignore it =#
    return only(out)
end

# ---

Base.@kwdef struct UnaOp{M,P} <: Function
    """Simply to mark different operators in printing."""
    index::Int = 1

    """The number of hidden units in the dense layers"""
    n_hidden::Int = 16

    """The number of dense hidden layers"""
    n_layers::Int = 0

    """The Lux model skeleton"""
    model::M = Chain(              # Equivalent to nn.Sequential
        Dense(1, n_hidden, relu),  # Equivalent to [nn.Linear, nn.ReLU]
        (Dense(n_hidden, n_hidden, relu) for _ in 1:n_layers)...,
        Dense(n_hidden, 1),
    )

    """The parameters (and state) used in the Lux model. The state is very likely unused."""
    params_and_state::P = let rng = MersenneTwister(0)
        (p, s) = Lux.setup(rng, model)
        (ComponentArray(p), s)
    end
end

# So it prints the index
Base.show(io::IO, op::UnaOp) = print(io, "UnaOp[$(op.index)]")

# Overload call: takes two numbers, returns one number
@inline function (op::UnaOp)(x::Float32)
    return _call_unaop(op, x)
end
@inline @stable function _call_unaop(op::UnaOp, x::Float32)
    params, state = op.params_and_state
    out, _ = op.model([x], params, state)
    #= neural net state is not relevant, so we ignore it =#
    return only(out)
end

# ================== DE Optimizations ================== #
# TODO: Override the other eval functions from Evaluate.jl in DE.

function DynamicExpressions.EvaluateModule.deg1_eval(
    cumulator::AbstractVector{T}, op::UnaOp, ::DynamicExpressions.EvalOptions{false}
) where {T}
    params, state = op.params_and_state
    out, _ = op.model(cumulator', params, state)
    cumulator[:] .= out[:]
    return DynamicExpressions.EvaluateModule.ResultOk(cumulator, true)
end

function DynamicExpressions.EvaluateModule.deg2_eval(
    cumulator_l::AbstractVector{T},
    cumulator_r::AbstractVector{T},
    op::BinOp,
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

                UnaOp(; index=i, params_and_state=(new_una_params, new_una_state))
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

                BinOp(; index=i, params_and_state=(new_bin_params, new_bin_state))
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
    )
end

end  # OperatorsModule