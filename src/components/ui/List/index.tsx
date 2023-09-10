import { forwardRef } from 'react'

import Item from './Item'

type ListRef = React.ComponentRef<'ol' | 'ul'>
type ListProps = React.ComponentPropsWithoutRef<'ol' | 'ul'> & {
	variant: keyof typeof styles.variants
}

const List = forwardRef<ListRef, ListProps>(({
	className = '',
	variant,
	...props
}, ref) => {
	const Component = ({
		ordered: 'ol',
		unordered: 'ul',
	} as const)[variant]

	return (
		<Component
			className={`${styles.prose} ${styles.variants[variant]} ${className}`}
			ref={ref as React.ForwardedRef<HTMLOListElement>}
			{...props}
		/>
	)
})

const styles = {
	prose: 'prose:my-4 prose:pl-8 prose:[li_&]:my-2',
	variants: {
		ordered: 'list-decimal',
		unordered: 'list-disc',
	},
}

List.displayName = 'List'

export default Object.assign(List, {
	Item,
})
