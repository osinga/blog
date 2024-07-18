// @ts-check

import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const config = {
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

export default withContentlayer(config)
