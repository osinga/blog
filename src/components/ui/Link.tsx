import NextLink from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type LinkProps = React.ComponentProps<typeof NextLink> & {
	variant?: keyof typeof styles.variants
}

const Link = ({
	children,
	className = '',
	variant = 'accent',
	...props
}: LinkProps) => {
	const isExternal = props.href.toString().startsWith('https://')

	return (
		<NextLink
			className={[
				'inline-flex items-center gap-0.5 leading-none transition-colors',
				styles.variants[variant],
				className,
			].join(' ')}
			{...props}
		>
			{children}
			{isExternal && <ArrowUpRight className="text-sm" />}
		</NextLink>
	)
}

const styles = {
	variants: {
		accent: 'font-medium text-accent underline hover:text-accent/80',
		plain: 'hover:text-accent',
	},
}

export default Link
