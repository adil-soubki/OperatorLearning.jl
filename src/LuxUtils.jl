module LuxUtilsModule

using Lux

# Just a useful way to get a dense ffn.
function dense_ffn(sizes::Int...)
    layers = []
    for (in_size, out_size) in zip(sizes[1:end-1], sizes[2:end])
        activation = out_size == last(sizes) ? identity : relu
        push!(layers, Dense(in_size, out_size, activation))
    end
    return Chain(layers...)
end

end  # LuxUtilsModule