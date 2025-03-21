import Item from './Item'

type ListProps = React.ComponentPropsWithoutRef<'ol' | 'ul'> & {
	variant: keyof typeof styles.variants
}

const List = ({
	className = '',
	variant,
	...props
}: ListProps) => {
	const Component = ({
		ordered: 'ol',
		unordered: 'ul',
	} as const)[variant]

	return (
		<Component
			className={`${styles.prose} ${styles.variants[variant]} ${className}`}
			{...props}
		/>
	)
}

const styles = {
	prose: 'prose:my-4 prose:pl-8 prose:[li_&]:my-2',
	variants: {
		ordered: 'list-decimal',
		unordered: 'list-disc',
	},
}

export default Object.assign(List, {
	Item,
})
