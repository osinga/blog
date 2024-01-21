import type NextImage from 'next/image'
import { forwardRef } from 'react'
import { getImageProps } from 'next/image'

type ImageRef = React.ComponentRef<typeof NextImage>
type ImageProps = React.ComponentPropsWithoutRef<typeof NextImage>

const Image = forwardRef<ImageRef, ImageProps>(({
	className = '',
	...props
}, ref) => {
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
				className={`prose:my-6 [li_&]:!my-3 sm:prose:my-10 ${className}`}
				ref={ref}
				{...rest}
			/>
		</picture>
	)
})

Image.displayName = 'Image'

export default Image
