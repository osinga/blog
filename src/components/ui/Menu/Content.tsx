import * as Primitive from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

type ContentRef = React.ComponentRef<typeof Primitive.Content>
type ContentProps = React.ComponentPropsWithoutRef<typeof Primitive.Content>

const Content = forwardRef<ContentRef, ContentProps>(({
	className = '',
	...props
}, ref) => (
	<Primitive.Portal>
		<Primitive.Content
			align="start"
			className={[
				'min-w-[theme(spacing.32)] p-1 z-20',
				'border bg-white rounded-md shadow-md dark:bg-gray-900',
				'data-[state=open]:animate-scaleAndFadeIn data-[state=closed]:animate-scaleAndFadeOut',
				'origin-[--radix-dropdown-menu-content-transform-origin]',
				className,
			].join(' ')}
			loop
			ref={ref}
			sideOffset={4}
			{...props}
		/>
	</Primitive.Portal>
))

Content.displayName = 'Content'

export default Content
