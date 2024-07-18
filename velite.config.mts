import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { defineConfig, s } from 'velite'

export default defineConfig({
	collections: {
		posts: {
			name: 'Post',
			pattern: '*.mdx',
			schema: s.object({
				title: s.string(),
				description: s.string(),
				published: s.isodate(),
				modified: s.isodate().optional(),
				slug: s.path(),
				content: s.mdx(),
				html: s.markdown(),
			}),
		},
	},
	output: {
		clean: true,
	},
	markdown: {
		rehypePlugins: [
			rehypeSlug,
			[rehypeAutolinkHeadings, {
				behavior: 'wrap',
				properties: {
					variant: 'plain',
				},
			}],
		],
	},
	root: './src/posts',
	strict: process.env.NODE_ENV === 'production',
})
