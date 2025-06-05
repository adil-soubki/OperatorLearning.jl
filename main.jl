#=
Right now this shows the simplest possible learning scenario.
=#
using MLJBase: machine, fit!, predict, report
using OperatorLearning: UnaOp, BinOp, generate_expression_spec, similarity, update_operators
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

function generate_data_simple(; n_samples::Int=1000)
    # Generate input data
    x1 = randn(Float32, n_samples) * 100
    x2 = randn(Float32, n_samples) * 100
    # Generate output data
    y1 = x1 + x2
    y2 = x1 - x2
    # Combine input and output data
    X = (; x1, x2, y1, y2)
    y = zeros(Float32, length(x1))  # Dummy output
    return X, y
end

# ================== Main ================== #

function main()
    X, y = generate_data_simple(; n_samples=1000)
    n_input = length([k for k in keys(X) if startswith(String(k), "x")])
    n_output = length([k for k in keys(X) if startswith(String(k), "y")])

    # XXX: For some reasons changing n_layers, n_hidden, etc... throws an error.
    n_unaops, n_binops = 0, 2
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
    # XXX: There is a bug where the learned parameters aren't getting set.
    #  The real parameters live here: r.equations[r.best_idx].metadata.parameters.
    #   Need to unpack them back into the operator model weights. Can this be done
    #   in set_params???
    my_loss(pred, target) = pred
    regressor = SR.SRRegressor(;
        unary_operators=unary_operators,
        binary_operators=binary_operators,
        expression_spec=expression_spec,
        niterations=10,
        elementwise_loss=my_loss,
    )
    mach = machine(regressor, X, y)
    fit!(mach)
    # Update model operator parameters to match the best learned equation
    update_operators(mach.report[:fit].equations[mach.report[:fit].best_idx])
    # Print similarity of learned operators to some reference operators
    similarity(mach.model.unary_operators)
    similarity(mach.model.binary_operators)
    # Return the machine
    return mach
end