import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import {PokemonDescription} from "../PokemonDescription";
import metapod from "../../../../__mocks__/dataMocks/metapod.json"
beforeAll(() => jest.spyOn(window, 'fetch'));

jest.mock("next/image", () => {
	// eslint-disable-next-line react/display-name
	return () => <></>;
});
describe("PokemonDescription", () => {
	const activePokemon = {
		name: "metapod",
		url: "https://www.mockpokemonUrl.pk/metapod"
	}
	const queryClient = new QueryClient();
	describe("when it has a captured pokemon match", () => {

		const capturedPokemons = {
			"metapod": "https://www.mockpokemonUrl.pk"
		}
		
		it("should have a consistent snapshot", () => {
			//@ts-ignore
			window.fetch.mockResolvedValueOnce({
				ok: true,
				json: async () => (metapod),
			})
			const {container} = render(<QueryClientProvider client={queryClient}>
				<PokemonDescription 
					activePokemon={activePokemon} 
					addPokemon={jest.fn()} 
					removePokemon={jest.fn()} 
					capturedPokemons={capturedPokemons}
				/>
			</QueryClientProvider>)
			expect(container).toMatchSnapshot();
		});

	});

	describe("when it doesnt have captured pokemon match", () => {

		const capturedPokemons = {
			"togepi": "https://www.mockpokemonUrl.pk"
		}

		it("should have a consistent snapshot", () => {
			
			//@ts-ignore
			window.fetch.mockResolvedValueOnce({
				ok: true,
				json: async () => (metapod),
			})
			const {container} = render(<QueryClientProvider client={queryClient}><PokemonDescription 
				activePokemon={activePokemon} 
				addPokemon={jest.fn()} 
				removePokemon={jest.fn()} 
				capturedPokemons={capturedPokemons}
			/>
			</QueryClientProvider>)
			expect(container).toMatchSnapshot();
		})
	})
	
})