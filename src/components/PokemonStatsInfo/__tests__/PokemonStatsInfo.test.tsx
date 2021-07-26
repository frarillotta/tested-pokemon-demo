import { render } from "@testing-library/react";
import {PokemonStatsInfo} from "../PokemonStatsInfo";
import stats from "../../../../__mocks__/dataMocks/stats.json";
import { Stat } from "../../../types";

describe("PokemonStatsInfo", () => {
	
	describe("when loaded", () => {
		
		it("should have a consistent snapshot", () => {
			const {container} = render(<PokemonStatsInfo 
				stats={stats as Stat[]}
			/>);
			expect(container).toMatchSnapshot();
		});

	});

})