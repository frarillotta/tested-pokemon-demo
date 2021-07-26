module.exports = {
	reactStrictMode: true,
	react: {
		useSuspense: true,
		wait: true
	},
	images: {
		domains: ["https://pokeapi.co/", "raw.githubusercontent.com"]
	},
	excludeFile: (str) => /\*.{spec,test}.tsx/.test(str),
	webpack: (config, { webpack }) => {
		config.plugins.push(new webpack.IgnorePlugin(/\__tests__\//));
		return config
	},
}
