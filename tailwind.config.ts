import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config = {
	plugins: [
		plugin(({ addVariant }) => {
			addVariant('prose', '.prose &')
		}),
	],
} satisfies Config

export default config
