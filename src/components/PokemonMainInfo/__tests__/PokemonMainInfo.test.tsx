import { render } from "@testing-library/react";
import {PokemonMainInfo} from "../PokemonMainInfo";
import abilities from "../../../../__mocks__/dataMocks/abilities.json";

describe("PokemonMainInfo", () => {
	
	describe("when loaded", () => {
		
		it("should have a consistent snapshot", () => {
			const {container} = render(<PokemonMainInfo abilities={abilities} height={90} weight={90} />);
			expect(container).toMatchSnapshot();
		});

	});

})