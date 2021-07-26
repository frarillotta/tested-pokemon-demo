import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Homepage from "../pages";

describe("Homepage", () => {
	
	it("should have a consistent snapshot", () => {
		const queryClient = new QueryClient();
		const pokemonsList = {
			"count":1118,
			"next":null,
			"previous":null,
			"results":[
				{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},
				{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},
				{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"}
			]
		};

		const {container} = render(<QueryClientProvider client={queryClient}>
			<Homepage pokemonsList={pokemonsList}/>
		</QueryClientProvider>)
		expect(container).toMatchSnapshot();
	})
	
})