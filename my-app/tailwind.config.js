/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			width: {
				100: '100px',
				500: '500px',
			},
			height: {
				100: '100px',
				500: '500px',
			},
		},
	},
	plugins: [],
};
