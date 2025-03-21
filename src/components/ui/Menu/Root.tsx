import { DropdownMenu as Primitive } from 'radix-ui'

type RootProps = React.ComponentProps<typeof Primitive.Root>

const Root = (props: RootProps) => (
	<Primitive.Root {...props} />
)

export default Root
