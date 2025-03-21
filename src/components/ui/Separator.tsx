import { Separator as Primitive } from 'radix-ui'

type SeparatorProps = React.ComponentProps<typeof Primitive.Root>

const Separator = ({
	className = '',
	decorative = true,
	orientation = 'horizontal',
	...props
}: SeparatorProps) => (
	<Primitive.Root
		className={[
			'bg-border rounded-full',
			styles.prose,
			styles.variants[orientation],
			className,
		].join(' ')}
		decorative={decorative}
		orientation={orientation}
		{...props}
	/>
)

const styles = {
	prose: 'prose:my-8 prose:sm:my-14',
	variants: {
		horizontal: 'h-px w-full',
		vertical: 'h-full w-px',
	},
}

export default Separator
