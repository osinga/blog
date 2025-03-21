import NextLink from 'next/link'

type ButtonProps = React.ComponentProps<'button'>
const Button = (props: ButtonProps) =>
	<button {...props} />

type LinkProps = React.ComponentProps<typeof NextLink>
const Link = (props: LinkProps) =>
	<NextLink {...props} />

const Combined = ({
	className = '',
	...props
}: ButtonProps | LinkProps) => {
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
			{...props}
		/>
	)
}

export default Combined
