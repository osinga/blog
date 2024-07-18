import type { MetadataRoute } from 'next'

import { posts } from '~/.velite'

const sitemap = (): MetadataRoute.Sitemap => [
	{
		url: 'https://osinga.blog',
		lastModified: new Date().toISOString().split('T').at(0),
	},
	...posts
		.filter(post => process.env.NODE_ENV === 'production' ? post.slug !== 'style-guide' : true)
		.map(post => ({
			url: `https://osinga.blog/posts/${post.slug}`,
			lastModified: (post.modified || post.published).split('T').at(0),
		})),
]

export default sitemap
