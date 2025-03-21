import { DropdownMenu as Primitive } from 'radix-ui'

import { Button } from '@/components/ui'

type TriggerProps = Omit<React.ComponentProps<typeof Primitive.Trigger>, 'asChild'>
	& React.ComponentProps<typeof Button>

const Trigger = ({
	children,
	...props
}: TriggerProps) => (
	<Primitive.Trigger asChild {...props}>
		<Button>
			{children}
		</Button>
	</Primitive.Trigger>
)

export default Trigger
