import { render } from "@testing-library/react";
import {PokemonMovesInfo} from "../PokemonMovesInfo";
import moves from "../../../../__mocks__/dataMocks/moves.json";
import { Move } from "../../../types";

describe("PokemonMovesInfo", () => {
	
	describe("when loaded", () => {
		
		it("should have a consistent snapshot", () => {
			const {container} = render(<PokemonMovesInfo moves={moves as Move[]} />);
			expect(container).toMatchSnapshot();
		});

	});

})