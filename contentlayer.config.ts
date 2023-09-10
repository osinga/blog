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
})
