import Script from 'next/script'
import type { Metadata } from 'next'

import './styles.css'
import { Header } from '@/components/app'

type LayoutProps = {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
	<html className="scroll-smooth" lang="en">
		<body className="grid gap-12 mx-auto px-6 py-12 max-w-prose md:gap-24 md:pb-24">
			<Header />
			{children}
		</body>

		{process.env.NODE_ENV === 'production' && (
			<Script
				data-website-id="ff09ffbf-8eb1-4050-91ab-2ed19b7d5b6f"
				src="https://insights.osinga.blog/script.js"
			/>
		)}
	</html>
)

export const metadata: Metadata = {
	title: {
		default: 'Osinga',
		template: '%s / Posts / Osinga',
	},
	description: 'On my interests',
	applicationName: 'Osinga',
	metadataBase: new URL('https://osinga.blog'),
	alternates: {
		types: {
			'application/atom+xml': '/posts/feed.atom',
			'application/feed+json': '/posts/feed.json',
			'application/rss+xml': '/posts/feed.rss',
		},
	},
}

export default Layout
