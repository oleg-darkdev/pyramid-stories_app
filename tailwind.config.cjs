module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extends: {},
		fontFamily: {
			courierPrime: ['courier-prime', 'sans-serif'],
			din: ['din-2014-narrow', 'sans-serif'],
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	// daisyUI config (optional)
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#661AE6',
					secondary: '#D926AA',
					accent: '#5AB034', // eco
					neutral: '#191D24',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		]
	}
};
