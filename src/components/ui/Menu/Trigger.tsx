import * as Primitive from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

import { Button } from '@/components/ui'

type TriggerRef = React.ComponentRef<typeof Primitive.Trigger>
type TriggerProps = Omit<React.ComponentPropsWithoutRef<typeof Primitive.Trigger>, 'asChild'>
	& React.ComponentPropsWithoutRef<typeof Button>

const Trigger = forwardRef<TriggerRef, TriggerProps>(({
	children,
	...props
}, ref) => (
	<Primitive.Trigger asChild ref={ref} {...props}>
		<Button>
			{children}
		</Button>
	</Primitive.Trigger>
))

Trigger.displayName = 'Trigger'

export default Trigger
