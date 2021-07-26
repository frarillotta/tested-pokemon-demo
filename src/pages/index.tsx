import { useQuery } from 'react-query'
import { apiClient } from '../API/apiClient';
import { url } from '../constants';
import { pokemonType } from '../types/pokemonsList';
import { useState } from 'react';
import React from 'react';
import { useLocalStorage } from '../hooks';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import { debounce } from '../utils';
import { ChangeEvent } from 'react';
import { useMemo } from 'react';
import { PokemonsList, FilterButtons, PokemonDescription } from '../components';
import Head from 'next/head';
import { BackgroundPokeball } from '../components/SVGs';

export default function Home({pokemonsList}) {

	const fetchPokemons = async () => apiClient(`${url}/pokemon?limit=40000`);
	const [searchQuery, setSearchQuery] = useState(null);
	const [filter, setFilter] = useState<"captured" | "not-captured" | null>(null);
	const [activePokemon, setActivePokemon] = useState(null);
  
	const {
		data,
		error,
		isError,
		isFetching,
		isIdle,
		isLoading,
		isSuccess,
	} = useQuery<pokemonType>('allPokemons', fetchPokemons, { initialData: pokemonsList });
	const { capturedPokemons, addPokemon, removePokemon } = useLocalStorage();
	let pokemons = isSuccess && data.results;
	if (filter) {
		if (filter === "captured") {
			const capturedPokemonsKeys = Object.keys(capturedPokemons);
			pokemons = capturedPokemonsKeys.map((pokemonName) => {
				return {name: pokemonName, url: capturedPokemons[pokemonName]} 
			});
		};
		if (filter === "not-captured") {
			const capturedPokemonsKeys = Object.keys(capturedPokemons);
			pokemons = pokemons.filter((pokemon) => 
				!capturedPokemonsKeys.includes(pokemon.name)
			)
		}
	}
	if (searchQuery) {
		pokemons = pokemons.filter((pokemon) => 
			pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
		)
	};
	
	const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>[]) => {
		setSearchQuery(event[0].target.value);
	};
	const debouncedChangeHandler = useMemo(
		() => debounce(inputChangeHandler, 300)
		, []);

	if (error) {
		return <div>Oh no, something went wrong :( Please try again</div>
	}

	return (
		<>
			<Head>	
				<title>Translated Pokemon Demo</title>
				<meta name="description" content="Demo for tested's pokemon challenge"></meta>
			</Head>
			<Wrapper>
				<Background size={400}/>
				<Search id={"search-bar"}>
					<TextField 
						style={{width: "100%"}} 
						label="Search Pokemon" 
						variant="standard" 
						onChange={debouncedChangeHandler} 
					/>
				</Search>
				<Filters
					filter={filter}
					setFilter={setFilter}
				/>
				{isSuccess && <List
					addPokemon={addPokemon}
					capturedPokemons={capturedPokemons}
					pokemons={pokemons}
					removePokemon={removePokemon}
					setActivePokemon={setActivePokemon}
				/>}
				{activePokemon && <Description 
					activePokemon={activePokemon} 
					capturedPokemons={capturedPokemons}
					addPokemon={addPokemon}
					removePokemon={removePokemon}
				/>
				}
			</Wrapper>
		</>
	)
}

const Wrapper = styled.main`
	height: 100%;
	display: grid;
	grid-template-rows: 100px minmax(300px, 1fr);
	grid-template-columns: 1fr 0.5fr 1fr 1fr;
	grid-template-areas: 
	"search search search filter"
	"list list description description";
	@media(max-width: 770px) {		
		grid-template-rows: 100px minmax(200px, 50%)  50%;
		grid-template-areas: 
			"search search search filter"
			"list list list list"
			"description description description description";
	}
`

const Background = styled(BackgroundPokeball)`

	transform: rotate(10deg);
	opacity: 0.05;
	position: absolute;
	top: 20px;
	left: 40px;

`

const Search = styled.div`
	grid-area: search;
	padding: 20px;
`

const Filters = styled(FilterButtons)`
	grid-area: filter;
	padding: 20px 20px 20px 0px;
	margin-left: auto;
	margin-top: 8px;
	&::before{
		content: "Filter by";
		align-self: center;
		margin-right: 10px;
	}
`
const List = styled(PokemonsList)`
	grid-area: list;
	padding: 20px;
`

const Description = styled(PokemonDescription)`
	grid-area: description;
`

export async function getStaticProps() {
	const fetchPokemons = async () => apiClient(`${url}/pokemon?limit=40000`);
	const pokemonsList = await fetchPokemons()
	return { props: { pokemonsList } }
}