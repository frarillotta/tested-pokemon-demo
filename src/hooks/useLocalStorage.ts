import { pokemonResults } from './../types/pokemonsList';
import { useCallback, useEffect, useState } from "react";
import { setItem, getItem } from "../utils"

const useLocalStorage = () => {

	const [capturedPokemons, setCapturedPokemons] = useState<Record<string, string> | null>(null);

	useEffect(()=>{
		setCapturedPokemons(getItem("pokemons"));
	}, []);

	useEffect(()=>{
		setItem("pokemons", capturedPokemons);
	}, [capturedPokemons])

	const addPokemon = useCallback((pokemon: pokemonResults) => {
		setCapturedPokemons({...capturedPokemons, [pokemon.name]: pokemon.url});
	}, [capturedPokemons]);

	const removePokemon = useCallback((pokemonName: string) => {
		const { [pokemonName]: remove, ...rest } = capturedPokemons;
		setCapturedPokemons(rest)
	}, [capturedPokemons]);

	return { capturedPokemons, addPokemon, removePokemon }

}

export { useLocalStorage }