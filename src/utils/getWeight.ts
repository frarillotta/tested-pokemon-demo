export const getWeight = (weight: number) => {

	const weightInKgs = weight/10;

	const weightInLbs = weightInKgs * 2.205;

	const roundedWeightInLbs = Math.round(weightInLbs * 100)/100;

	return `${weightInKgs} kg (${roundedWeightInLbs} lbs)`

}