import { forwardRef } from 'react'

type ItemRef = React.ComponentRef<'li'>
type ItemProps = React.ComponentPropsWithoutRef<'li'>

const Item = forwardRef<ItemRef, ItemProps>(({
	className = '',
	...props
}, ref) => (
	<li
		className={`my-2 ${className}`}
		ref={ref}
		{...props}
	/>
))

Item.displayName = 'Item'

export default Item
