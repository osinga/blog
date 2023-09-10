import NextLink from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import { forwardRef } from 'react'

type LinkRef = React.ComponentRef<typeof NextLink>
type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink> & {
	variant?: keyof typeof styles.variants
}

const Link = forwardRef<LinkRef, LinkProps>(({
	children,
	className = '',
	variant = 'accent',
	...props
}, ref) => {
	const isExternal = props.href.toString().startsWith('https://')
	const isEmail = props.href.toString().startsWith('mailto:')

	return (
		<NextLink
			className={[
				'inline-flex items-center gap-0.5 leading-none transition-colors',
				styles.variants[variant],
				className,
			].join(' ')}
			ref={ref}
			{...props}
		>
			{children}
			{isExternal && <ArrowUpRight className="text-sm" />}
			{isEmail && <Mail className="mt-0.5 text-sm" />}
		</NextLink>
	)
})

const styles = {
	variants: {
		accent: 'font-medium text-accent underline hover:text-accent/80',
		plain: 'hover:text-accent',
	},
}

Link.displayName = 'Link'

export default Link
