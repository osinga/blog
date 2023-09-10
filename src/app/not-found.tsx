import { ArrowLeft } from 'lucide-react'

import { Button, Heading, Paragraph } from '@/components/ui'

const NotFound = () => (
	<main className="flex flex-col items-center gap-16">
		<header className="prose text-center">
			<Heading variant="h1">Nothing Here</Heading>
			<Paragraph className="text-center" variant="lead">
				Are you sure you&apos;re at the right place?
			</Paragraph>
		</header>

		<Button href="/">
			<ArrowLeft />
			Go Back Home
		</Button>
	</main>
)

export default NotFound
