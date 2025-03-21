import type { NextConfig } from 'next'

if (!process.env.VELITE_STARTED) {
	process.env.VELITE_STARTED = '1'

	import('velite').then(({ build }) => build({
		watch: process.argv.indexOf('dev') !== -1,
	}))
}

const config: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	modularizeImports: {
		'@/components/ui': {
			transform: '@/components/ui/{{member}}',
		},
	},
	poweredByHeader: false,
	typescript: {
		ignoreBuildErrors: true,
	},
	headers: async () => {
		return [
			{
				source: '/:path*',
				headers: [
					{ key: 'Referrer-Policy',        value: 'strict-origin-when-cross-origin' },
					{ key: 'X-Content-Type-Options', value: 'nosniff' },
					{ key: 'X-Frame-Options',        value: 'DENY' },
					{ key: 'X-XSS-Protection',       value: '1; mode=block' },
				],
			},
		]
	},
}

export default config
