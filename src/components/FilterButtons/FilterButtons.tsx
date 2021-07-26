
import React from 'react';
import styled from "styled-components";
import { PokeballButton } from '../PokeballButton/PokeballButton';
import Tooltip from '@material-ui/core/Tooltip';

type FilterButtonsProps = {
    filter: null | "captured" | "not-captured",
    setFilter: (filterType: null | "captured" | "not-captured") => void,
	className: string,
}

export const FilterButtons = ({filter, setFilter, className}: FilterButtonsProps) => {
	return (
		<Wrapper className={className}>
			<Tooltip title={"Not captured"}>
				<Pokeball
					isCaptured={false}
					isActive={filter === "not-captured"}
					onClick={() => filter === "not-captured" ? setFilter(null) : setFilter('not-captured')}
					size={45}
				/>
			</Tooltip>
			<Tooltip title={"Captured"}>
				<Pokeball
					isCaptured={true}
					isActive={filter === "captured"}
					onClick={() => filter === "captured" ? setFilter(null) : setFilter('captured')}
					size={45}
				/>
			</Tooltip>
		</Wrapper>
	)
};

const Pokeball = styled(PokeballButton)`
	height: 47px;
	border-radius: 100%;
	border: ${props => props.isActive ? "solid black 1px" : "solid white 1px"}
`;

const Wrapper = styled.main`
	display: flex;
`;
