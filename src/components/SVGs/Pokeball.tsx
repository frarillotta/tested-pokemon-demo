const Pokeball = ({size = 26, className}) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="25 25 50 50">
	<path d="M 30 50
        a 1 1 1 0 1 40 0
        h-12.5
        a 1 1 1 0 0 -15 0
        z"
	fill="#f00" stroke="#222"
	></path>
	<circle
		cx="50"
		cy="50"
		r="5"
		fill="#222" stroke="#222"
	></circle>
	<path d="M 30 50
        a 1 1 1 0 0 40 0
        h-12.5
        a 1 1 1 0 1 -15 0
        z"
	fill="#fff" stroke="#222"
	></path>
</svg>

export { Pokeball }