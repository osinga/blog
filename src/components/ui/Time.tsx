import { forwardRef } from 'react'

type TimeRef = React.ComponentRef<'time'>
type TimeProps = Omit<React.ComponentPropsWithoutRef<'time'>, 'dateTime'> & {
	value: ConstructorParameters<typeof Date>[0]
}

const Time = forwardRef<TimeRef, TimeProps>(({
	children,
	value,
	...props
}, ref) => {
	const date = new Date(value)

	return (
		<time
			dateTime={date.toISOString()}
			ref={ref}
			{...props}
		>
			{children || new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date)}
		</time>
	)
})

Time.displayName = 'Time'

export default Time
