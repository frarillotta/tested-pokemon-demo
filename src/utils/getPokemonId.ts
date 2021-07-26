export const getPokemonId = (id: number) => {
	let idAsString = String(id);
	while (idAsString.length < 3) {

		idAsString = "0" + idAsString;

	}

	return idAsString
}