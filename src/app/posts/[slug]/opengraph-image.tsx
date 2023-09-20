import colors from 'tailwindcss/colors'
import { ImageResponse } from 'next/server'

import { allPosts } from '~/.contentlayer/generated'

type ImageProps = {
	params: {
		slug: string
	}
}

const Image = ({ params }: ImageProps) => {
	const post = allPosts.find(post => post.slug === params.slug)
	if (!post) return

	return new ImageResponse((
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				height: '100%',
				width: '100%',
				padding: 48,
				backgroundColor: colors.white,
			}}
		>
			<h1 style={{
				margin: 0,
				fontSize: 96,
			}}>{post.title}</h1>

			<p style={{
				margin: 0,
				fontSize: 48,
				color: colors.neutral[500],
			}}>{post.description}</p>

			<hr style={{
				margin: 24,
				marginLeft: 0,
				height: 4,
				width: '33%',
				backgroundColor: colors.rose[500],
				borderRadius: 4,
			}} />

			<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					alt="Avatar"
					height="48"
					width="48"
					src="http://localhost:3000/icon.svg"
				/>
				<span style={{
					margin: 0,
					fontSize: 32,
				}}>Osinga</span>
			</div>
		</div>
	), { debug: false })
}

export const runtime = 'edge'

export default Image
