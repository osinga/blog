type TimeProps = Omit<React.ComponentProps<'time'>, 'dateTime'> & {
	value: ConstructorParameters<typeof Date>[0]
}

const Time = ({
	children,
	value,
	...props
}: TimeProps) => {
	const date = new Date(value)

	return (
		<time
			dateTime={date.toISOString()}
			{...props}
		>
			{children || new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date)}
		</time>
	)
}

export default Time
