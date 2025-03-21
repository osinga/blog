import colors from 'tailwindcss/colors'
import { ImageResponse } from 'next/og'

import { posts } from '~/.velite'

type ImageProps = {
	params: Promise<{
		slug: string
	}>
}

const Image = async ({ params }: ImageProps) => {
	const { slug } = await params
	const post = posts.find(post => post.slug === slug)

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
				// @ts-expect-error Not in the types yet, but available as per
				// https://twitter.com/shuding_/status/1703868006143528972
				textWrap: 'balance',
			}}>{post.title}</h1>

			<p style={{
				margin: 0,
				fontSize: 48,
				color: colors.neutral[500],
				// @ts-expect-error Not in the types yet, but available as per
				// https://twitter.com/shuding_/status/1703868006143528972
				textWrap: 'balance',
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
					src="https://osinga.blog/apple-icon.png"
					style={{
						border: '2px solid black',
						borderRadius: '100%',
					}}
				/>
				<span style={{
					margin: 0,
					fontSize: 32,
				}}>Osinga</span>
			</div>
		</div>
	))
}

export const runtime = 'edge'

export default Image
