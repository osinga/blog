import * as Primitive from '@radix-ui/react-dropdown-menu'

type ItemProps = React.ComponentProps<typeof Primitive.Item>

const Item = ({
	className = '',
	...props
}: ItemProps) => (
	<Primitive.Item
		className={[
			'flex items-center gap-2 px-2 h-7',
			'cursor-default outline-none rounded-md select-none text-sm transition-colors',
			'focus:bg-gray-100 dark:focus:bg-gray-800',
			'[&_svg]:text-base',
			className,
		].join(' ')}
		{...props}
	/>
)

export default Item
