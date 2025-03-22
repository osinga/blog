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
			}),
		},
	},
} satisfies Config

export default config
