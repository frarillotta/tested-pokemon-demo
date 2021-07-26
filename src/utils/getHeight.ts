
export const getHeight = (height: number) => {

	const heightInCm = height*10;

	var realFeet = heightInCm / 30.48;	
	var feet = Math.floor(realFeet);
	var inches = Math.round((realFeet - feet) * 12);
	const heightInInch = feet + "'" + inches + "''";

	return `${heightInCm} cm ~(${heightInInch})`

}