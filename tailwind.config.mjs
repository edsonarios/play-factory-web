/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
        fblue: '#00b2ff'
      },
			textColor: {
				fblue: '#00b2ff',
			},
			boxShadowColor: {
				fblue: '#00b2ff',
			},
		},
	},
	plugins: [],
}
