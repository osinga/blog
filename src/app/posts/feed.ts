import { Feed } from 'feed'

import { posts } from '~/.velite'

const feed = (type: 'atom' | 'json' | 'rss') => {
	const feed = new Feed({
		id: 'https://osinga.blog',
		title: 'Osinga',
		description: 'On my interests.',
		copyright: `${new Date().getFullYear()} Osinga`,
		favicon: 'https://osinga.blog/favicon.ico',
		language: 'en',
		link: 'https://osinga.blog',
		author: {
			name: 'Osinga',
		},
		feedLinks: {
			atom: 'https://osinga.blog/posts/feed.atom',
			json: 'https://osinga.blog/posts/feed.json',
			rss: 'https://osinga.blog/posts/feed.rss',
		},
	})

	posts
		.filter(post => process.env.NODE_ENV === 'production' ? post.slug !== 'style-guide' : true)
		.sort((a, b) => b.published.localeCompare(a.published))
		.forEach(post => {
			feed.addItem({
				id: `https://osinga.blog/posts/${post.slug}`,
				title: post.title,
				description: post.description,
				content: post.html,
				author: [feed.options.author!],
				date: new Date(post.published),
				link: `https://osinga.blog/posts/${post.slug}`,
			})
		})

	const variant = {
		atom: { generate: feed.atom1, type: 'application/xml' },
		json: { generate: feed.json1, type: 'application/json' },
		rss: { generate: feed.rss2, type: 'application/xml' },
	}[type]

	return new Response(variant.generate(), {
		status: 200,
		headers: {
			'Content-Type': variant.type,
		},
	})
}

export default feed
