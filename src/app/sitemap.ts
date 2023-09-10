import type { MetadataRoute } from 'next'

import { allPosts } from '~/.contentlayer/generated'

const sitemap = (): MetadataRoute.Sitemap => [
	{
		url: 'https://osinga.blog',
		lastModified: new Date().toISOString().split('T').at(0),
	},
	...allPosts.map(post => ({
		url: `https://osinga.blog/posts/${post.slug}`,
		lastModified: (post.modified || post.published).split('T').at(0),
	})),
]

export default sitemap
