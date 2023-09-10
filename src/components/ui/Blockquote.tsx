import { forwardRef } from 'react'

type BlockquoteRef = React.ComponentRef<'blockquote'>
type BlockquoteProps = React.ComponentPropsWithoutRef<'blockquote'>

const Blockquote = forwardRef<BlockquoteRef, BlockquoteProps>(({
	className = '',
	...props
}, ref) => (
	<blockquote
		className={[
			'pl-4 border-l-4 font-medium italic sm:pl-6 sm:text-lg',
			`before:content-['"'] after:content-['"']`,
			'prose:my-6 sm:prose:my-8',
			className,
		].join(' ')}
		ref={ref}
		{...props}
	/>
))

Blockquote.displayName = 'Blockquote'

export default Blockquote
