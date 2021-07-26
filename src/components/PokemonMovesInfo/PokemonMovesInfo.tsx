import type { Move } from "../../types";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from 'react-window';
import styled from "styled-components";
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { useState, useMemo } from "react";
import { capitalizeFirstLetter } from "../../utils";

type PokemonMovesInfoType = {
	moves: Move[],
	className?: string
};

const PokemonMovesInfo = ({moves, className = ""}: PokemonMovesInfoType) => {
	
	const availableGames = useMemo<string[]>(() => moves.reduce<string[]>((accumulator, currentVal) => {
		currentVal.version_group_details.forEach((groupDetails)=>{
			const name = groupDetails.version_group.name
			if (!accumulator.includes(name)) accumulator.push(name)
		});
		return accumulator;
	}, []), []);
	
	const [currentSelection, setSelection] = useState(availableGames[0]);
	const handleChange = (event) => {
		setSelection(event.target.value);
	};
	const Row = ({ index, style }) => {
		const move = moves[index]
		const moveName = move.move.name;
		const currentVersion = move.version_group_details.filter((version) => version.version_group.name === currentSelection);
		const learnedAt = currentVersion[0]?.level_learned_at ?? "--";
		const learnedIn = currentVersion[0]?.move_learn_method.name || "--"
		return <GridRow style={style}> 
			<Name>
				{capitalizeFirstLetter(moveName)}
			</Name>
			<LearnedAt>
				{learnedAt}
			</LearnedAt>
			<LearnedIn>
				{capitalizeFirstLetter(learnedIn)}
			</LearnedIn>
		</GridRow>
	};

	return (
		<Wrapper className={className}>
			<FormControl style={{width: "100%", marginBottom: "20px"}}>
				<InputLabel>Pokemon games</InputLabel>
				<Select
					autoWidth={true}
					labelId="pokemon-moves"
					value={currentSelection || ""}
					onChange={handleChange}
				>
					{availableGames.map((game) => {
						return <MenuItem key={game} value={game}>{capitalizeFirstLetter(game)}</MenuItem>
					})}
				</Select>
			</FormControl>
			<GridRow style={{marginBottom: "15px", marginRight: "20px", fontWeight: "bold"}}>
				<Name>
					Name
				</Name>
				<LearnedAt>
					Learned At
				</LearnedAt>
				<LearnedIn>
					Learned In
				</LearnedIn>
			</GridRow>
			<AutoSizer style={{width: "auto", height: "auto"}}>
				{({ width }) => (
					<List
						height={367}
						itemCount={moves.length}
						itemSize={35}
						width={width}
					>
						{Row}
					</List>
				)}
			</AutoSizer>
		</Wrapper>
	)

}

const GridRow = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-areas: "name learnedAt learnedIn";
`

const Name = styled.span`
	grid-area: name;
`

const LearnedAt = styled.span`
	grid-area: learnedAt;
`

const LearnedIn = styled.span`
	grid-area: learnedIn;
`

const Wrapper = styled.main`
	width: 100%;
	height: 100%;
	padding: 25px;
	position: relative;
`

const ListItem = styled.span`
`

export { PokemonMovesInfo }