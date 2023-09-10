import { AlertOctagon, CheckCircle2, Info } from 'lucide-react'
import { forwardRef } from 'react'

type CalloutRef = React.ComponentRef<'div'>
type CalloutProps = React.ComponentPropsWithoutRef<'div'> & {
	variant?: keyof typeof styles.variants
}

const Callout = forwardRef<CalloutRef, CalloutProps>(({
	children,
	className = '',
	variant = 'info',
	...props
}, ref) => {
	const Icon = {
		info: Info,
		accent: CheckCircle2,
		destructive: AlertOctagon,
	}[variant]

	return (
		<div
			className={[
				'relative pr-3 pl-9 py-2 w-full border rounded-md text-sm',
				styles.variants[variant],
				className,
			].join(' ')}
			ref={ref}
			{...props}
		>
			<Icon className="absolute left-3 top-2.5 text-base" />
			{children}
		</div>
	)
})

const styles = {
	variants: {
		info: 'text-secondary',
		accent: 'border-accent text-accent',
		destructive: 'border-destructive text-destructive',
	},
}

Callout.displayName = 'Callout'

export default Callout
