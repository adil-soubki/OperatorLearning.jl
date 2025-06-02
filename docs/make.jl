using OperatorLearning
using Documenter

DocMeta.setdocmeta!(OperatorLearning, :DocTestSetup, :(using OperatorLearning); recursive=true)

makedocs(;
    modules=[OperatorLearning],
    authors="adil <5231841+adil-soubki@users.noreply.github.com> and contributors",
    sitename="OperatorLearning.jl",
    format=Documenter.HTML(;
        canonical="https://adil.github.io/OperatorLearning.jl",
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
    ],
)

deploydocs(;
    repo="github.com/adil/OperatorLearning.jl",
    devbranch="main",
)
