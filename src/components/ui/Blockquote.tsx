type BlockquoteProps = React.ComponentProps<'blockquote'>

const Blockquote = ({
	className = '',
	...props
}: BlockquoteProps) => (
	<blockquote
		className={[
			'pl-4 border-l-4 font-medium italic text-primary sm:pl-6 sm:text-lg',
			'before:content-[open-quote] before:absolute before:-translate-x-full',
			'after:content-[close-quote]',
			'prose:my-6 sm:prose:my-8',
			className,
		].join(' ')}
		{...props}
	/>
)

export default Blockquote
