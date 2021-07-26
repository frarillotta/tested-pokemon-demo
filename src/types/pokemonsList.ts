export type pokemonType = {
    count: number,
    next: string,
    previous: string,
    results: pokemonResults[]
}

export type pokemonResults = {
    name: string, 
    url: string
}