/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				dark: '#232C35',
				grey: '#4F4F4F',
				'grey-7': '#F7F7F7',
				'grey-5': '#E0E0E0',
				yellow: '#F2C94C',
				darkyellow:'#DEB63D',
				purple: '#5C1A8D'
			},
			screens: {
				'hd': '1920px',
			},
		},
	},
	plugins: [],
}
