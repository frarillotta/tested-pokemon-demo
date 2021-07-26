import { Pokeball } from '../SVGs';
import styled from "styled-components";
import { CSSProperties, forwardRef } from 'react';

type PokeballButtonProps = {
    isCaptured: boolean;
    onClick: () => void;
    size?: number;
    style?: CSSProperties
}

const PokeballButton = forwardRef(({isCaptured, onClick, size = 24, ...delegate}: PokeballButtonProps, ref) => {
	return <PokeballWrapper 
		onClick={onClick}
		ref={ref}
		data-t-is-captured={isCaptured}
		{...delegate}
	>
		<PokeballSVG 
			size={size}
			isCaptured={isCaptured}
		/>
	</PokeballWrapper>
})
PokeballButton.displayName = "PokeballButton";

const PokeballWrapper = styled.div`
	cursor: pointer;
`

const PokeballSVG = styled(Pokeball)`
	filter: ${({isCaptured}) => isCaptured ? "" : "opacity(0.3)"};
`

export { PokeballButton }