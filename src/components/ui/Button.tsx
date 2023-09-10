import NextLink from 'next/link'
import { forwardRef } from 'react'

type ButtonRef = React.ComponentRef<'button'>
type ButtonProps = React.ComponentPropsWithoutRef<'button'>
const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) =>
	<button ref={ref} {...props} />)

type LinkRef = React.ComponentRef<typeof NextLink>
type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink>
const Link = forwardRef<LinkRef, LinkProps>((props, ref) =>
	<NextLink ref={ref} {...props} />)

const Combined = forwardRef<ButtonRef | LinkRef, ButtonProps | LinkProps>(({
	className = '',
	...props
}, ref) => {
	const Component: React.ElementType = 'href' in props
		? Link
		: Button

	return (
		<Component
			className={[
				'inline-flex items-center justify-center gap-2 h-9 px-2.5',
				'font-medium leading-none rounded-md transition',
				'href' in props
					? 'hover:bg-gray-100 dark:hover:bg-gray-900'
					: 'enabled:hover:bg-gray-100 dark:enabled:hover:bg-gray-900',
				className,
			].join(' ')}
			ref={ref}
			{...props}
		/>
	)
})

Combined.displayName = 'Button'
Button.displayName = 'Button'
Link.displayName = 'Button'

export default Combined
