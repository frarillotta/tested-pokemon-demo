import styled from "styled-components";
import { getHeight, getWeight, capitalizeFirstLetter } from "../../utils";

const PokemonMainInfo = ({height, weight, abilities}) => {
	return <PokemonInfo>
		<InfoPropertyValueWrapper>
			<InfoProperty>
				Height:
			</InfoProperty>
			<InfoValue>
				{getHeight(height)}
			</InfoValue>
		</InfoPropertyValueWrapper>
		<InfoPropertyValueWrapper>
			<InfoProperty>
				Weight: 
			</InfoProperty>
			<InfoValue>
				{getWeight(weight)}
			</InfoValue>
		</InfoPropertyValueWrapper>
		<InfoPropertyValueWrapper>
			<InfoProperty>
				Abilities: 
			</InfoProperty>
			<InfoValue>
				{abilities.reduce((accumulator, currentVal, index) => {
					const formattedAbility = capitalizeFirstLetter(currentVal.ability.name).replace("-", " ");
					const val = accumulator + (index === 0 ? "" : ", ") + formattedAbility;
					return val
				}, "")}
			</InfoValue>
		</InfoPropertyValueWrapper>
	</PokemonInfo>
}


const InfoPropertyValueWrapper = styled.div`
	display: grid;
	grid-template-areas: 
		"propertyname propertyvalue propertyvalue .";
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	gap: 2rem;
`

const InfoProperty = styled.span`
	grid-area: propertyname;
	color: #878787
`

const InfoValue = styled.span`
	grid-area: propertyvalue;
`

const PokemonInfo = styled.div`
	display: grid;
	gap: 20px;
	padding: 25px;
`

export { PokemonMainInfo }