import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config = {
	content: [
		'./src/**/*.tsx',
	],
	plugins: [
		plugin(({ addVariant }) => {
			addVariant('prose', '.prose &')
		}),
	],
	theme: {
		extend: {
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
