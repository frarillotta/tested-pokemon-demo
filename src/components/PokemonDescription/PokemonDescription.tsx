import Image from "next/image";
import { useQuery } from "react-query";
import { PokeballButton } from "../PokeballButton/PokeballButton";
import { PokemonMainInfo } from "../PokemonMainInfo/PokemonMainInfo";
import { PokemonStatsInfo } from "../PokemonStatsInfo/PokemonStatsInfo";
import { apiClient } from "../../API/apiClient";
import { Pokemon, pokemonResults } from "../../types";
import styled from "styled-components";
import { memo, useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from "@material-ui/core/Box";
import {getColorByType, getPokemonId} from "../../utils";
import {PokemonMovesInfo} from "../PokemonMovesInfo/PokemonMovesInfo";

type PokemonDescriptionProps = {
	activePokemon: pokemonResults,
	capturedPokemons: Record<string, string>,
	addPokemon: (pokemon: pokemonResults) => void,
	removePokemon: (pokemonName: string) => void,
	className: string,
}

export const PokemonDescription = memo(({activePokemon, capturedPokemons, addPokemon, removePokemon, className}: PokemonDescriptionProps) => {

	const [value, setValue] = useState(0);

	const handleChange = (_, newValue) => {
	  setValue(newValue);
	};

	const fetchPokemons = async () => apiClient(activePokemon.url);

	const {
		data,
		error,
		isError,
		isFetching,
		isIdle,
		isLoading,
		isSuccess,
	} = useQuery<Pokemon>(activePokemon.name, fetchPokemons, {});
	const pokemon = isSuccess && data;
	const types = isSuccess && data && pokemon.types.map((type) => type.type.name);
	const isCaptured = pokemon && capturedPokemons.hasOwnProperty(pokemon.name);
	return (isSuccess && data && 
		<DescriptionWrapper backgroundColor={ getColorByType(types[0]) } className={className}>
			<Header>
				<PokemonImageWrapper>
					<Image 
						src={pokemon.sprites.front_default}
						alt={`${pokemon.name} front sprite`}
						width={200} 
						height={200}
					/>
				</PokemonImageWrapper>
				<PokemonTypesNameWrapper>
					<PokemonName>{pokemon.name.toUpperCase()} <PokemonId>#{getPokemonId(pokemon.id)}</PokemonId></PokemonName>
					<PokemonTypesWrapper>
						{types.map((type) => <PokemonType background={ getColorByType(type) } key={type}>{type}</PokemonType>)}
					</PokemonTypesWrapper>
				</PokemonTypesNameWrapper>
				<Pokeball
					isCaptured={isCaptured}
					onClick={() => isCaptured ? removePokemon(pokemon.name) : addPokemon(activePokemon)}
					size={100}
				/>
			</Header>
			<Wrapper>
				<AppBar 
					color="transparent"
					position="static"
					style={{
						boxShadow: "none"
					}}
				>
					<Tabs
						value={value} 
						onChange={handleChange}
						aria-label="Pokemon description tabs" 
						centered
					>
						<Tab label="Info" />
						<Tab label="Stats" />
						<Tab label="Moves" />
					</Tabs>
				</AppBar>
				<TabPanel value={value} index={0}>
					<PokemonMainInfo 
						abilities={pokemon.abilities} 
						weight={pokemon.weight} 
						height={pokemon.height}
					/>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<PokemonStatsInfo stats={pokemon.stats}/>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<PokemonMovesInfo moves={pokemon.moves}/>
				</TabPanel>
			</Wrapper>
		</DescriptionWrapper>
	)

//TODO stats with progress bar, map colors to stat name
//Tab for about / moves / stats?
//idk if image slider for different sprites
});

function TabPanel({ children, value, index, ...other }) {
  
	return (
	  <div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					{children}
				</Box>
			)}
	  </div>
	);
}

const Header = styled.header`
`

const DescriptionWrapper = styled.main`
	position: relative;
	border-radius: 50px;
	margin: 20px 20px 20px 0px;
	background: ${props => props.backgroundColor};
`

const PokemonId = styled.span`
	margin-left: 15px;
	font-weight: normal;
	font-size: 0.9rem;
`

const Pokeball = styled(PokeballButton)`
	position: absolute;
	right: 17px;
	top: 20px;
`

const PokemonTypesNameWrapper = styled.div`
	position: absolute;
	top: 30px;
	left: 50px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	@media(max-width: 770px) {		
		top: 25px;
		gap: 10px;
	}
`

const PokemonTypesWrapper = styled.div`
	display: flex;
	gap: 10px;
	@media(max-width: 770px) {		
		flex-direction: column;
	}
`;

const Wrapper = styled.div`
	background: white;
	padding-top: 50px;
	border-radius: 50px;
	margin-top: 135px;
	box-shadow: 2px 5px 18px 0px black;
`

const PokemonImageWrapper = styled.div`
	position: absolute;
	top: 0px;
	left: calc(50% - 100px);
`

const PokemonName = styled.div`
	font-weight: bold;
	letter-spacing: 2px;
	color: white;
`;

const PokemonType = styled.span`
	background: ${props => props.background};
	letter-spacing: 2px;
	color: white;
	border-radius: 16px;
	padding: 10px;
	width: fit-content;
	font-size: .8rem;
	font-weight: bold;
	box-shadow: 0px 1px 3px 0px black;
`;