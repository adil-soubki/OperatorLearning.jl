module OperatorLearning

export dense_ffn
export Lop, operator_arity, set_params
export generate_expression_spec, update_operators
export similarity

# Write your package code here.
include("LuxUtils.jl")
include("Operators.jl")
include("Similarity.jl")
include("TemplateExpressionUtils.jl")

using .LuxUtilsModule: dense_ffn
using .OperatorsModule: Lop, operator_arity, set_params
using .SimilarityModule: similarity
using .TemplateExpressionUtilsModule: generate_expression_spec, update_operators

end  # OperatorLearning
