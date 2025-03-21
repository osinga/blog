import { DropdownMenu as Primitive } from 'radix-ui'

type ContentProps = React.ComponentProps<typeof Primitive.Content>

const Content = ({
	className = '',
	...props
}: ContentProps) => (
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
			sideOffset={4}
			{...props}
		/>
	</Primitive.Portal>
)

export default Content
