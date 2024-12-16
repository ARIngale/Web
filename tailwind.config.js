/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			textShadow: {
				DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
			},
			colors: {
				darkBlue: '#086795',
				lightBlue: '#6ae6ee',
				primaryBlue: '#0a93c4',
			},
		},
	},
	plugins: [
		require('tailwindcss-textshadow')
	],
}

