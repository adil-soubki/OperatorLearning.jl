using MLJBase: machine, fit!, predict, report
using OperatorLearning: UnaOp, BinOp, generate_expression_spec
using SymbolicRegression: SymbolicRegression as SR

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

function main()
    X, y = generate_data(; n_samples=100)
    n_input = length([k for k in keys(X) if startswith(String(k), "x")])
    n_output = length([k for k in keys(X) if startswith(String(k), "y")])

    n_unaops, n_binops = 2, 4
    unary_operators = [UnaOp(; index=i) for i in 1:n_unaops]
    binary_operators = [BinOp(; index=i) for i in 1:n_binops]

    # This generates an expression spec to learn operators
    expression_spec = generate_expression_spec(
        n_input=n_input,
        n_output=n_output,
        una_ops=unary_operators,
        bin_ops=binary_operators
    )

    # Fit the model
    my_loss(pred, target) = pred
    regressor = SR.SRRegressor(;
        unary_operators=unary_operators,
        binary_operators=binary_operators,
        expression_spec=expression_spec,
        niterations=1,
        elementwise_loss=my_loss,
    )
    mach = machine(regressor, X, y)
    fit!(mach)
end