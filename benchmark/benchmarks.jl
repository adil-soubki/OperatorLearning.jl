using OperatorLearning
using BenchmarkTools
using Random
using SymbolicRegression: SymbolicRegression as SR
using DynamicExpressions: DynamicExpressions as DE
# TODO: This is pretty dumb but it'll do for now.

SUITE = BenchmarkGroup()

# Write your benchmarks here.
include("../example.jl")
SUITE["example"] = @benchmarkable main()

function benchmark_expression_setup()
    n_unaops, n_binops = 2, 4
    unary_operators = [UnaOp(; index=i) for i in 1:n_unaops]
    binary_operators = [BinOp(; index=i) for i in 1:n_binops]

    n_unaop_params = length(unary_operators[1].params_and_state[1])
    n_binop_params = length(binary_operators[1].params_and_state[1])

    n_input = 2
    n_output = 2

    # Define the template structure function
    function template_combiner((; f1, f2), (; p1, p2, p3, p4, p5, p6), (x1, x2, y1, y2))
        # Update the parameters of the expressions
        f1_with_params = set_params(f1, (p1, p2), (p3, p4, p5, p6))
        f2_with_params = set_params(
            f2, (p1, p2), (p3, p4, p5, p6); operators=SR.get_metadata(f1_with_params).operators
        )
        # Evaluate the expressions
        f1_val = f1_with_params(x1, x2)
        f2_val = f2_with_params(x1, x2)
        # Return the loss
        return abs2(y1 - f1_val) + abs2(y2 - f2_val)
    end

    # Create the template structure with parameters
    structure = SR.TemplateStructure{(:f1, :f2),(:p1, :p2, :p3, :p4, :p5, :p6)}(
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

    operators = SR.OperatorEnum(;
        binary_operators=binary_operators, unary_operators=unary_operators
    )

    x1 = SR.Node{Float32}(; feature=1)
    x2 = SR.Node{Float32}(; feature=2)

    tree = SR.Node(;
        op=2,
        children=(
            SR.Node(; op=1, children=(x1, SR.Node(; op=1, children=(x2,)))),
            SR.Node(; op=1, children=(x1, SR.Node(; op=1, children=(x2,)))),
        ),
    )

    eval_options = DE.EvalOptions(use_fused=Val(false))
    f1 = SR.ComposableExpression(tree; operators=operators, eval_options=eval_options)
    f2 = SR.ComposableExpression(tree; operators=operators, eval_options=eval_options)

    expression = let rng = MersenneTwister(0)
        SR.TemplateExpression(
            (; f1=f1, f2=f2);
            parameters=(
                p1=randn(rng, Float32, n_unaop_params),
                p2=randn(rng, Float32, n_unaop_params),
                p3=randn(rng, Float32, n_binop_params),
                p4=randn(rng, Float32, n_binop_params),
                p5=randn(rng, Float32, n_binop_params),
                p6=randn(rng, Float32, n_binop_params),
            ),
            structure=structure,
            operators=operators,
        )
    end

    X = let rng = MersenneTwister(0)
        randn(rng, Float32, n_input + n_output, 1_000)
    end

    f(expression, X) = [expression(X) for _ in 1:10_000]
    return (f=f, expression=expression, X=X)
end

tmp = benchmark_expression_setup()
SUITE["expression"] = @benchmarkable tmp.f(tmp.expression, tmp.X)

# Run the suite.
tune!(SUITE)
results = run(SUITE, verbose=true)

BenchmarkTools.save("output.json", median(results))