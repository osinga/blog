// @ts-expect-error
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// @ts-expect-error
import rehypeSlug from 'rehype-slug'
// @ts-expect-error
import remarkSmartypants from 'remark-smartypants'
// @ts-expect-error
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
	name: 'Post',
	contentType: 'mdx',
	filePathPattern: '*.mdx',
	fields: {
		title: { type: 'string', required: true },
		description: { type: 'string', required: true },
		published: { type: 'date', required: true },
		modified: { type: 'date' },
	},
	computedFields: {
		slug: { type: 'string', resolve: post => post._raw.flattenedPath },
	},
}))

export default makeSource({
	contentDirPath: './src/posts',
	disableImportAliasWarning: true,
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [
			// @ts-expect-error
			[remarkSmartypants, {
				dashes: 'oldschool',
			}],
		],
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
})
