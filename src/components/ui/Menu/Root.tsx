import * as Primitive from '@radix-ui/react-dropdown-menu'

type RootProps = React.ComponentPropsWithoutRef<typeof Primitive.Root>

const Root = (props: RootProps) => (
	<Primitive.Root {...props} />
)

export default Root
