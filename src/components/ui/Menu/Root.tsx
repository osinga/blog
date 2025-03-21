import * as Primitive from '@radix-ui/react-dropdown-menu'

type RootProps = React.ComponentProps<typeof Primitive.Root>

const Root = (props: RootProps) => (
	<Primitive.Root {...props} />
)

export default Root
