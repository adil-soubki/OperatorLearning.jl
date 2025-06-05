module OperatorLearning

export UnaOp, BinOp, set_params
export generate_expression_spec, update_operators
export similarity

# Write your package code here.
include("Operators.jl")
include("Similarity.jl")
include("TemplateExpressionUtils.jl")

using .OperatorsModule: UnaOp, BinOp, set_params
using .SimilarityModule: similarity
using .TemplateExpressionUtilsModule: generate_expression_spec, update_operators

end  # OperatorLearning
