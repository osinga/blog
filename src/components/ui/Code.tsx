import { forwardRef } from 'react'

type CodeRef = React.ComponentRef<'code'>
type CodeProps = React.ComponentProps<'code'>

const Code = forwardRef<CodeRef, CodeProps>(({
	className = '',
	...props
}, ref) => (
	<code
		className={`px-1 py-0.5 bg-gray-100 font-mono font-semibold rounded text-accent text-[0.875em]/none whitespace-nowrap dark:bg-gray-800 ${className}`}
		ref={ref}
		{...props}
	/>
))

Code.displayName = 'Code'

export default Code
