using OperatorLearning
using BenchmarkTools

SUITE = BenchmarkGroup()
SUITE["rand"] = @benchmarkable rand(10)

# Write your benchmarks here.
include("../example.jl")
SUITE["example"] = @benchmarkable main()

# Run the suite.
tune!(SUITE)
results = run(SUITE, verbose=true)

BenchmarkTools.save("output.json", median(results))