module OperatorLearning

export UnaOp, BinOp, set_params

# Write your package code here.
include("Operators.jl")

using .OperatorsModule: UnaOp, BinOp, set_params

end  # OperatorLearning
