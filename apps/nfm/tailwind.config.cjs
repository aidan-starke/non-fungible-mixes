const config = {
	mode: "jit",

	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"../../packages/ui/**/*.{html,js,svelte,ts}",
		"../../packages/mp3/**/*.{html,js,svelte,ts}",
	],

	theme: {
		extend: {
			colors: {
				deep: "#264653",
				leaf: "#2a9d8f",
				sand: "#e9c46a",
				sunset: "#f4a261",
				wood: "#e76f51",
			},
			fontFamily: {
				fira: ["Fira Code", "monospace"],
			},
			boxShadow: {
				soft: "-2px 2px 2px 0px",
			},
		},
	},

	plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
