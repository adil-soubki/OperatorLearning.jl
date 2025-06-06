module SimilarityModule

using ..OperatorsModule: Lop, operator_arity
using PrettyTables: pretty_table, ft_printf
using Statistics: mean
using SymbolicRegression: square, cube, inv, neg
# TODO: Should make it possible to customize:
#   - reference operators
#   - the similarity measure used (currently MAE)
#   - data used for computing similarity
#   For now this is all hardcoded.

function similarity(lop::Lop{1})
    operators = [sin, cos, exp, square, cube, inv, neg, abs]
    X = randn(Float32, 1000) * 100  # Use Float32 for consistency

    # Create a dictionary to store similarities for each operator
    similarities = Dict{Symbol,Float64}()

    # For each operator, compute similarity between its output and learned operator's output
    for ref_op in operators
        y_ref = Float32.(ref_op.(X))  # Convert to Float32
        y_learned = Float32.(lop.(X))  # Convert to Float32
        similarities[Symbol(string(ref_op))] = mean(
            abs.(y_ref - y_learned)
        )  # Compute MAE for now.
    end

    return similarities
end

function similarity(lop::Lop{2})
    operators = [+, *, /, -]
    X = randn(Float32, 2, 1000) * 100  # Use Float32 for consistency

    # Create a dictionary to store similarities for each operator
    similarities = Dict{Symbol,Float64}()

    # For each operator, compute similarity between its output and learned operator's output
    for ref_op in operators
        y_ref = Float32.(ref_op.(X[1, :], X[2, :]))  # Convert to Float32
        y_learned = Float32.(lop.(X[1, :], X[2, :]))  # Convert to Float32
        similarities[Symbol(string(ref_op))] = mean(
            abs.(y_ref - y_learned)
        )  # Compute MAE for now.
    end

    return similarities
end

function similarity(lops)
    if length(lops) == 0
        return  # Nothing to compute.
    end
    arities = [operator_arity(lop) for lop in lops]
    if !all(==(first(arities)), arities)
        error("All operators must have the same arity. Found arities: $arities")
    end

    # Get similarities for each operator
    similarities = [similarity(lop) for lop in lops]

    # Get all reference operator names (they should be the same for all lops)
    ref_ops = sort(collect(keys(first(similarities))))

    # Create a matrix of similarities
    data = Matrix{Float64}(undef, length(lops), length(ref_ops))
    for (i, sim_dict) in enumerate(similarities)
        for (j, op) in enumerate(ref_ops)
            data[i, j] = sim_dict[op]
        end
    end

    # Create row labels using the show method we defined
    row_labels = [string(lop) for lop in lops]

    # Create column labels (reference operator names)
    col_labels = string.(ref_ops)

    # Print the table
    pretty_table(data;
        row_labels=row_labels,
        header=col_labels,
        title="Operator Similarities",
        alignment=:c,
        formatters=ft_printf("%.3f", 1:length(ref_ops))
    )
end

end  # SimilarityModule