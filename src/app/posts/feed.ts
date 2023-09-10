import { Feed } from 'feed'

import { allPosts } from '~/.contentlayer/generated'

const feed = (type: 'atom' | 'json' | 'rss') => {
	const feed = new Feed({
		id: 'https://osinga.blog/posts',
		title: 'Osinga',
		description: 'On my interests.',
		copyright: `${new Date().getFullYear()} Osinga`,
		favicon: 'https://osinga.blog/favicon.ico',
		language: 'en',
		link: 'https://osinga.blog/posts',
		author: {
			name: 'Osinga',
			email: 'contact@osinga.blog',
		},
		feedLinks: {
			atom: 'https://osinga.blog/posts/feed.atom',
			json: 'https://osinga.blog/posts/feed.json',
			rss: 'https://osinga.blog/posts/feed.rss',
		},
	})

	allPosts.forEach(post => {
		feed.addItem({
			id: `https://osinga.blog/posts/${post.slug}`,
			title: post.title,
			description: post.description,
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
