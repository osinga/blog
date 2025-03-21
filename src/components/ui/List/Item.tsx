type ItemProps = React.ComponentProps<'li'>

const Item = ({
	className = '',
	...props
}: ItemProps) => (
	<li
		className={`my-2 ${className}`}
		{...props}
	/>
)

export default Item
