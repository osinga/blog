import type NextImage from 'next/image'
import { getImageProps } from 'next/image'

type ImageProps = React.ComponentProps<typeof NextImage>

const Image = ({
	className = '',
	...props
}: ImageProps) => {
	const { props: { srcSet: light, ...rest } } = getImageProps(props)
	const { props: { srcSet: dark } } = typeof props.src === 'string' && props.src.includes('-light')
		? getImageProps({ ...props, src: props.src.replace('-light', '-dark') })
		: { props: { srcSet: null } }

	return (
		<picture>
			{dark && <source media="(prefers-color-scheme: dark)" srcSet={dark} />}
			<source media="(prefers-color-scheme: light)" srcSet={light} />

			{/* eslint-disable-next-line jsx-a11y/alt-text */}
			<img
				className={`prose:my-6 in-[li]:my-3! sm:prose:my-10 ${className}`}
				{...rest}
			/>
		</picture>
	)
}

export default Image
