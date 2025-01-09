import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				accent: 'var(--accent)',
				background: 'var(--background)',
				text: 'var(--text)',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} satisfies Config;
