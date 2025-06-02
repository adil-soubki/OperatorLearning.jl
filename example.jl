using OperatorLearning
using SymbolicRegression:
    SRRegressor,
    OperatorEnum,
    with_metadata,
    get_metadata,
    with_contents,
    get_contents,
    Node,
    ComposableExpression,
    TemplateStructure,
    TemplateExpression,
    TemplateExpressionSpec,
    ParamVector,
    @template_spec,
    get_options,
    Options,
    MultitargetSRRegressor,
    square,
    cube,
    neg,
    equation_search,
    calculate_pareto_frontier,
    eval_tree_array,
    compute_complexity,
    string_tree
using MLJBase: machine, fit!, predict, report

# ================== Data ================== #

function generate_data(; n_samples::Int=1000)
    # Generate input data
    x1 = randn(Float32, n_samples) * 10
    x2 = randn(Float32, n_samples) * 10
    # Generate output data
    y1 = 2 * cos.(x2) + x1 .^ 2 .- 2
    y2 = 2 * cos.(x2 + x1) .^ 2 .- 2
    # Combine input and output data
    X = (; x1, x2, y1, y2)
    y = zeros(Float32, length(x1))  # Dummy output
    return X, y
end

# ================== Main ================== #

# Define the template structure function
function template_combiner((; f1, f2), (; p1, p2, p3, p4, p5, p6), (x1, x2, y1, y2))
    # Update the parameters of the expressions
    f1_with_params = set_params(f1, (p1, p2), (p3, p4, p5, p6))
    f2_with_params = set_params(
        f2, (p1, p2), (p3, p4, p5, p6); operators=get_metadata(f1_with_params).operators
    )
    # Evaluate the expressions
    f1_val = f1_with_params(x1, x2)
    f2_val = f2_with_params(x1, x2)
    # Return the loss
    return abs2(y1 - f1_val) + abs2(y2 - f2_val)
end

function main()
    X, y = generate_data(; n_samples=100)

    n_unaops, n_binops = 2, 4
    unary_operators = [UnaOp(; index=i) for i in 1:n_unaops]
    binary_operators = [BinOp(; index=i) for i in 1:n_binops]

    n_unaop_params = length(unary_operators[1].params_and_state[1])
    n_binop_params = length(binary_operators[1].params_and_state[1])


    n_input = 2
    #length([k for k in keys(X) if startswith(String(k), "x")])
    n_output = 2
    #length([k for k in keys(X) if startswith(String(k), "y")])

    # Create the template structure with parameters
    structure = TemplateStructure{(:f1, :f2),(:p1, :p2, :p3, :p4, :p5, :p6)}(
        template_combiner;
        num_parameters=(
            p1=n_unaop_params,
            p2=n_unaop_params,
            p3=n_binop_params,
            p4=n_binop_params,
            p5=n_binop_params,
            p6=n_binop_params,
        ),
        num_features=(f1=n_input, f2=n_input),
    )
    # Create the expression spec
    expression_spec = TemplateExpressionSpec(; structure=structure)

    # Fit the model
    my_loss(pred, target) = pred
    regressor = SRRegressor(;
        unary_operators=unary_operators,
        binary_operators=binary_operators,
        expression_spec=expression_spec,
        niterations=1,
        elementwise_loss=my_loss,
    )
    mach = machine(regressor, X, y)
    fit!(mach)
end