import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Heading, Paragraph, Separator, Time } from '@/components/ui'
import { MDX } from '@/components/app'
import { allPosts } from '~/.contentlayer/generated'

type PageProps = {
	params: {
		slug: string
	}
}

const Page = ({ params }: PageProps) => {
	const post = allPosts.find(post => post.slug === params.slug)
	if (!post) notFound()

	return (
		<main className="grid gap-4 sm:gap-8">
			<header>
				<Heading variant="h1">{post.title}</Heading>
				<Paragraph className="mt-2" variant="lead">{post.description}</Paragraph>
				<Separator className="my-2 !h-0.5 !w-1/3 !bg-accent" />
				<span className="flex items-baseline gap-2 text-sm">
					<Time value={post.published} />
					{post.modified && (
						<span className="text-tertiary text-xs">
							Modified <Time value={post.modified} />
						</span>
					)}
				</span>
			</header>

			<MDX>{post.body.code}</MDX>
		</main>
	)
}

export const generateMetadata = ({ params }: PageProps): Metadata | undefined => {
	const post = allPosts.find(post => post.slug === params.slug)
	if (!post) return

	return {
		title: post.title,
		description: post.description,
		openGraph: {
			type: 'article',
			title: post.title,
			url: `/posts/${post.slug}`,
			publishedTime: post.published,
			modifiedTime: post.modified,
			authors: ['Osinga'],
		},
	}
}

export const generateStaticParams = () =>
	allPosts.map(post => ({ slug: post.slug }))

export default Page
