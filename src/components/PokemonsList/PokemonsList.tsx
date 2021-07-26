import { pokemonResults } from '../../types/pokemonsList';
import { memo } from 'react';
import { FixedSizeList as List } from 'react-window';
import styled from "styled-components";
import { PokeballButton } from '../PokeballButton/PokeballButton';
import AutoSizer from "react-virtualized-auto-sizer";
import { capitalizeFirstLetter } from "../../utils";

type PokemonsListProps = {
	className: string,
    pokemons: pokemonResults[],
    capturedPokemons: Record<string, string>
    removePokemon: (pokemonName: string) => void;
    addPokemon: (pokemonResults: pokemonResults) => void;
	setActivePokemon: (pokemon: pokemonResults) => void;
}

const PokemonsList = memo(({className, pokemons, capturedPokemons, removePokemon, addPokemon, setActivePokemon}: PokemonsListProps) => {

	const Row = ({ index, style }) => {
		const pokemon = pokemons[index];
		const pokemonName = pokemon && capitalizeFirstLetter(pokemon.name);
		const isCaptured = pokemon && capturedPokemons.hasOwnProperty(pokemon.name);
		return <>
			<ListItem 
				onClick={()=> setActivePokemon(pokemon)}
				index={index}
				style={style}
			>
				{pokemonName}
			</ListItem>
			<Pokeball 
				style={{ ...style, position: "absolute", left: "none", width: "none", right: "0px" }}
				isCaptured={isCaptured} 
				onClick={() => isCaptured ? removePokemon(pokemon.name) : addPokemon(pokemons[index])}
				size={30}
			/>
		</>
	};

	return (
		<Wrapper className={className}>
			<AutoSizer>
				{({ height, width }) => (
					<List
						height={height}
						itemCount={pokemons.length}
						itemSize={35}
						width={width}
					>
						{Row}
					</List>
				)}
			</AutoSizer>
		</Wrapper>
	)
});
PokemonsList.displayName = "PokemonsList"

const Wrapper = styled.main`
	width: 100%;
	height: 100%;
`

const Pokeball = styled(PokeballButton)`
	display: inline-flex;
	align-items: center;
	padding-right: 10px;
`

const ListItem = styled.span`
	cursor: pointer;
	display: inline-flex;
	padding-left: 10px;
	align-items: center;
	background: ${props => props.index % 2 === 0 ? "#ffb50021" : "none"};
	border-radius: 10px;
`


export { PokemonsList }