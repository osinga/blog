import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config = {
	content: [
		'./src/**/*.{mdx,tsx}',
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
				destructive: 'hsl(var(--color-destructive))',
				primary: 'hsl(var(--color-primary))',
				secondary: 'hsl(var(--color-secondary))',
				tertiary: 'hsl(var(--color-tertiary))',
				placeholder: 'hsl(var(--color-placeholder))',
				background: 'hsl(var(--color-background))',
				border: 'hsl(var(--color-border))',
			}),
		},
	},
} satisfies Config

export default config
