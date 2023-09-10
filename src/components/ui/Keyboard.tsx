import { forwardRef } from 'react'

type KeyboardRef = React.ComponentRef<'kbd'>
type KeyboardProps = Omit<React.ComponentProps<'kbd'>, 'children'> & {
	alt?: boolean
	children?: string
	control?: boolean
	meta?: boolean
	shift?: boolean
}

const Keyboard = forwardRef<KeyboardRef, KeyboardProps>(({
	alt,
	children,
	className = '',
	control,
	meta,
	shift,
	...props
}, ref) => (
	<kbd
		className={[
			'flex gap-1 justify-center min-w-[26px] px-2',
			'border font-sans rounded-md uppercase',
			className,
		].join(' ')}
		ref={ref}
		{...props}
	>
		{alt && <span title="Alt">⌥</span>}
		{control && <span title="Control">⌃</span>}
		{shift && <span title="Shift">⇧</span>}
		{meta && <span title="Meta">⌘</span>}
		{children}
	</kbd>
))

Keyboard.displayName = 'Keyboard'

export default Keyboard
