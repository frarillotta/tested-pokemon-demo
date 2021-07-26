module.exports = {
	reactStrictMode: true,
	react: {
		useSuspense: true,
		wait: true
	},
	images: {
		domains: ["https://pokeapi.co/", "raw.githubusercontent.com"]
	},
	excludeFile: (str) => /\*.{spec,test}.tsx/.test(str)
}
