import { AlertTriangle, Info } from 'lucide-react'
import { forwardRef } from 'react'

import Strong from './Strong'

type CalloutRef = React.ComponentRef<'div'>
type CalloutProps = React.ComponentPropsWithoutRef<'div'> & {
	variant?: keyof typeof styles.variants
}

const Callout = forwardRef<CalloutRef, CalloutProps>(({
	children,
	className = '',
	variant = 'note',
	...props
}, ref) => {
	const Icon = {
		note: Info,
		warning: AlertTriangle,
	}[variant]

	return (
		<div
			className={[
				'relative pr-3 pl-9 py-2 w-full border rounded-md text-sm',
				'prose:my-4',
				styles.variants[variant],
				className,
			].join(' ')}
			ref={ref}
			{...props}
		>
			<Strong className="capitalize text-inherit">{variant}:</Strong>
			<Icon className="absolute left-3 top-2.5 text-base" />
			{children}
		</div>
	)
})

const styles = {
	variants: {
		note: 'bg-blue-50 border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400 dark:bg-blue-950',
		warning: 'bg-amber-50 border-amber-500 text-amber-500 dark:border-amber-400 dark:text-amber-400 dark:bg-amber-950',
	},
}

Callout.displayName = 'Callout'

export default Callout
