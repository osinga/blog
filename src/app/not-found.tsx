import { ArrowLeft } from 'lucide-react'

import { Button, Heading, Paragraph } from '@/components/ui'

const NotFound = () => (
	<main className="flex flex-col items-center gap-16">
		<header className="prose text-center">
			<Heading variant="h1">Page Not Found</Heading>
			<Paragraph className="text-center" variant="lead">
				We couldn&apos;t find what you&apos;re looking for.
			</Paragraph>
		</header>

		<Button href="/">
			<ArrowLeft />
			Go Back Home
		</Button>
	</main>
)

export default NotFound
