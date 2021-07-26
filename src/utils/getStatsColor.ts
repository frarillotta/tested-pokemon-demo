const statsColorMap = {
	"hp": "#cc4434",
	"attack": "#F08030",
	"defense":"#F8D030",
	"special-defense": "#54a666",
	"special-attack": "#6890F0",
	"speed": "#fc6898"
}

export const getColorByStat = (stat: keyof typeof statsColorMap) => statsColorMap[stat];