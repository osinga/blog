import * as Primitive from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

type ItemRef = React.ComponentRef<typeof Primitive.Item>
type ItemProps = React.ComponentPropsWithoutRef<typeof Primitive.Item>

const Item = forwardRef<ItemRef, ItemProps>(({
	className = '',
	...props
}, ref) => (
	<Primitive.Item
		className={[
			'flex items-center gap-2 px-2 h-7',
			'cursor-default outline-none rounded-md select-none text-sm transition-colors',
			'focus:bg-gray-100 dark:focus:bg-gray-800',
			'[&_svg]:text-base',
			className,
		].join(' ')}
		ref={ref}
		{...props}
	/>
))

Item.displayName = 'Item'

export default Item
