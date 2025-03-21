type ParagraphProps = React.ComponentProps<'p'> & {
	variant?: keyof typeof styles.variants
}

const Paragraph = ({
	className = '',
	variant = 'default',
	...props
}: ParagraphProps) => (
	<p
		className={`text-pretty ${styles.prose} ${styles.variants[variant]} ${className}`}
		{...props}
	/>
)

const styles = {
	prose: 'prose:mt-4 prose:first:mt-0',
	variants: {
		default: 'text-base/7',
		lead: 'text-lg sm:text-xl md:text-2xl text-tertiary dark:text-secondary',
	},
}

export default Paragraph
