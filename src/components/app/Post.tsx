import Link from 'next/link'

import type { Post as PostType } from '~/.velite'
import { Heading, Paragraph, Time } from '@/components/ui'

type PostProps = Omit<React.ComponentPropsWithoutRef<typeof Link>, 'children' | 'href'> & {
	post: PostType
}

const Post = ({
	className = '',
	post,
	...props
}: PostProps) => (
	<Link className={`group ${className}`} href={`/posts/${post.slug}`} {...props}>
		<header className="flex items-baseline justify-between flex-col sm:flex-row">
			<Heading as="h4" className="transition-colors group-hover:text-accent" variant="h3">
				{post.title}
			</Heading>

			<Time className="text-xs sm:text-sm" value={post.published} />
		</header>

		<Paragraph>{post.description}</Paragraph>
	</Link>
)

export default Post
