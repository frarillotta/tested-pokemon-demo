import { render } from "@testing-library/react";
import {PokemonsList} from "../PokemonsList";
import list from "../../../../__mocks__/dataMocks/list.json";
import capturedPokemons from "../../../../__mocks__/dataMocks/capturedpokemon.json";
import { pokemonResults } from "../../../types";

describe("PokemonsList", () => {
	
	describe("when loaded", () => {
		
		it("should have a consistent snapshot", () => {
			const {container} = render(<PokemonsList 
				pokemons={list as unknown as pokemonResults[]} 
				addPokemon={jest.fn()}
				capturedPokemons={capturedPokemons}
				setActivePokemon={jest.fn()}
				removePokemon={jest.fn()}
			/>);
			expect(container).toMatchSnapshot();
		});

	});

})