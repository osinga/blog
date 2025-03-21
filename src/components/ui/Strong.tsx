type StrongProps = React.ComponentProps<'strong'>

const Strong = ({
	className = '',
	...props
}: StrongProps) => (
	<strong
		className={`text-primary ${className}`}
		{...props}
	/>
)

export default Strong
