import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config = {
	content: [
		'./src/**/*.tsx',
	],
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [
		plugin(({ addVariant }) => {
			addVariant('prose', '.prose &')
		}),
	],
	theme: {
		extend: {
			animation: {
				scaleAndFadeIn: 'scale-and-fade-in 150ms cubic-bezier(.25, .75, .6, .98)',
				scaleAndFadeOut: 'scale-and-fade-out 75ms ease-out',
			},
			colors: ({ colors }) => ({
				gray: colors.neutral,
				accent: 'hsl(var(--color-accent))',
				primary: 'hsl(var(--color-primary))',
				secondary: 'hsl(var(--color-secondary))',
				tertiary: 'hsl(var(--color-tertiary))',
				background: 'hsl(var(--color-background))',
				border: 'hsl(var(--color-border))',
			}),
		},
	},
} satisfies Config

export default config
