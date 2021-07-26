import styled from "styled-components";
import { getColorByStat, capitalizeFirstLetter } from "../../utils";
import type {Stat} from "../../types";
import { StatCircle } from "../StatCircle/StatCircle";

const PokemonStatsInfo = ({stats}: {stats: Stat[]}) => {

	return <PokemonStatsWrapper>
		{stats.map((stat) => {
			const statName = stat.stat.name;
			return <div key={statName}>
				<StatsWrapper>
					<StatProperty>
						{capitalizeFirstLetter(statName)}
					</StatProperty>
					<StatValue
						color={getColorByStat(statName)}
						value={stat.base_stat}
					/>
					<EffortProperty>
						Effort
					</EffortProperty>
					<EffortValue>
						{stat.effort}
					</EffortValue>
				</StatsWrapper>
			</div>
		})}
	</PokemonStatsWrapper>
}

const PokemonStatsWrapper = styled.div`
	display: grid;
	gap: 20px;
	padding: 25px;
`



const StatsWrapper = styled.div`
	display: grid;
	grid-template-areas: 
		"name value effort effortValue";
	grid-template-columns: repeat(4, 1fr);
	align-items: center;
	gap: 2rem;
`

const StatProperty = styled.span`
	grid-area: name;
	color: #878787
`

const StatValue = styled(StatCircle)`
	grid-area: value;
`

const EffortProperty = styled.span`
	grid-area: effort;
	color: #878787
`

const EffortValue = styled.div`
	grid-area: effortValue;
`

export { PokemonStatsInfo }