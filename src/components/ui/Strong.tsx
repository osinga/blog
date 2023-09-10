import { forwardRef } from 'react'

type StrongRef = React.ComponentRef<'strong'>
type StrongProps = React.ComponentPropsWithoutRef<'strong'>

const Strong = forwardRef<StrongRef, StrongProps>(({
	className = '',
	...props
}, ref) => (
	<strong
		className={`text-primary ${className}`}
		ref={ref}
		{...props}
	/>
))

Strong.displayName = 'Strong'

export default Strong
