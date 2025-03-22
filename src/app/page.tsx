import { ArrowUpRight } from 'lucide-react'

import { Heading, Link, Paragraph } from '@/components/ui'
import { Post } from '@/components/app'
import { posts } from '~/.velite'

const Page = () => (
	<main className="grid gap-16 sm:gap-24">
		<section className="prose">
			<Paragraph variant="lead">Hello</Paragraph>
			<Paragraph className="max-w-lg">
				Product manager and software developer.
				Open to a new challenge.
				Reach out to me on{` `}
				<Link href="mailto:contact@osinga.blog">contact@osinga.blog</Link>.
			</Paragraph>
		</section>

		<section className="grid gap-3 sm:gap-6">
			<Heading variant="h2">Projects</Heading>
			<div className="grid grid-cols-2">
				<a className="group" href="https://felingua.com">
					<Heading as="h4" className="flex items-center gap-2 transition-colors group-hover:text-accent" variant="h3">
						Felingua <ArrowUpRight className="text-sm" />
					</Heading>
					<Paragraph>Language practice made easy.</Paragraph>
				</a>
			</div>
		</section>

		<section className="grid gap-3 sm:gap-6">
			<Heading variant="h2">Posts</Heading>
			{posts
				.filter(post => process.env.NODE_ENV === 'production' ? post.slug !== 'style-guide' : true)
				.sort((a, b) => b.published.localeCompare(a.published))
				.map(post => <Post key={post.slug} post={post} />)
			}
		</section>
	</main>
)

export default Page
