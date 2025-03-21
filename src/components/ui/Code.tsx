type CodeProps = React.ComponentProps<'code'>

const Code = ({
	className = '',
	...props
}: CodeProps) => (
	<code
		className={`px-1 py-0.5 bg-gray-100 font-mono font-semibold rounded text-accent text-[0.875em]/none whitespace-nowrap dark:bg-gray-800 ${className}`}
		{...props}
	/>
)

export default Code
