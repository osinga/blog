import type { MetadataRoute } from 'next'

import { allPosts } from '~/.contentlayer/generated'

const sitemap = (): MetadataRoute.Sitemap => [
	{
		url: 'https://osinga.blog',
		lastModified: new Date().toISOString().split('T').at(0),
	},
	...allPosts
		.filter(post => process.env.NODE_ENV === 'production' ? post.slug !== 'style-guide' : true)
		.map(post => ({
			url: `https://osinga.blog/posts/${post.slug}`,
			lastModified: (post.modified || post.published).split('T').at(0),
		})),
]

export default sitemap
