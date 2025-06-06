module TemplateExpressionUtilsModule

using ..OperatorsModule: Lop, set_params
using SymbolicRegression:
    get_metadata,
    TemplateStructure,
    TemplateExpression,
    TemplateExpressionSpec

# Generate the template expression spec
function generate_expression_spec(; n_input, n_output, una_ops, bin_ops)
    n_fs = n_output # Assumes each y corresponds to one function for now.
    n_ps = length(una_ops) + length(bin_ops)
    n_unaops = length(una_ops)
    param_sizes = [
        length(op.params_and_state[1]) for op in vcat(una_ops, bin_ops)
    ]

    # Build the feature and parameter keys
    fs = Symbol.("f" .* string.(1:n_fs))
    ps = Symbol.("p" .* string.(1:n_ps))

    # Build num_parameters and num_features NamedTuples
    num_parameters = NamedTuple{Tuple(ps)}(param_sizes)
    num_features = NamedTuple{Tuple(fs)}(fill(n_input, n_fs))

    # Generate template_combiner function
    template_combiner = (fs_named, ps_named, data) -> begin
        fs = values(fs_named)
        ps = values(ps_named)
        xs = data[1:n_input]
        ys = data[n_input+1:end]

        unaop_ps = [ps[i] for i in 1:n_unaops]
        binop_ps = [ps[i] for i in n_unaops+1:length(ps)]

        f_with_params = [set_params(fs[1], unaop_ps, binop_ps)]
        for (i, f) in enumerate(fs)
            if i > 1
                push!(
                    f_with_params,
                    set_params(
                        f, unaop_ps, binop_ps;
                        operators=get_metadata(f_with_params[1]).operators
                    )
                )
            end
        end
        f_vals = [f(xs...) for f in f_with_params]
        return sum(abs(y - f_val) for (y, f_val) in zip(ys, f_vals))
    end

    # Build TemplateStructure and TemplateExpressionSpec
    structure = TemplateStructure{Tuple(fs), Tuple(ps)}(
        template_combiner;
        num_parameters=num_parameters,
        num_features=num_features
    )

    return TemplateExpressionSpec(; structure=structure)
end

# There is an issue (i.e., a bug) where the learned operator parameters are
# only available on the learned equations (not the machine or model).
# This function takes an equation, extracts the learned parameters, and
# returns the updated operators.
# XXX: Not sure this is properly passing all the needed params to
#   the operator constructor.
# XXX: I think this should just be done in set_params somewhere.
# NOTE: Running this updates equation.metadata.operators also.
function update_operators(equation)
    unaops = ntuple(
        i -> let
            # extract the learned parameters
            new_params = equation.metadata.parameters[i]
            # build an updated operator
            old_unaop = equation.metadata.operators.unaops[i]
            old_params, old_state = old_unaop.params_and_state
            old_params[:] .= new_params
            Lop{1}(
                deepcopy(old_unaop.model);  # XXX: Is deepcopy really needed here?
                index=i, params_and_state=(new_params, old_state)
            )
        end,
        Val(length(equation.metadata.operators.unaops))
    )
    binops = ntuple(
        i -> let
            # extract the learned parameters
            new_params = equation.metadata.parameters[
                i + length(equation.metadata.operators.unaops)
            ]
            # build an updated operator
            old_binop = equation.metadata.operators.binops[i]
            old_params, old_state = old_binop.params_and_state
            old_params[:] .= new_params
            Lop{2}(
                deepcopy(old_binop.model);  # XXX: Is deepcopy really needed here?
                index=i, params_and_state=(new_params, old_state)
            )
        end,
        Val(length(equation.metadata.operators.binops))
    )
    return unaops, binops
end

end  # TemplateExpressionUtilsModule