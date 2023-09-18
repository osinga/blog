import { forwardRef } from 'react'

type ParagraphRef = React.ComponentRef<'p'>
type ParagraphProps = React.ComponentPropsWithoutRef<'p'> & {
	variant?: keyof typeof styles.variants
}

const Paragraph = forwardRef<ParagraphRef, ParagraphProps>(({
	className = '',
	variant = 'default',
	...props
}, ref) => (
	<p
		className={`${styles.prose} ${styles.variants[variant]} ${className}`}
		ref={ref}
		{...props}
	/>
))

const styles = {
	prose: 'prose:mt-4 prose:first:mt-0',
	variants: {
		default: 'text-base/7',
		lead: 'text-lg sm:text-xl md:text-2xl text-tertiary dark:text-secondary',
	},
}

Paragraph.displayName = 'Paragraph'

export default Paragraph
