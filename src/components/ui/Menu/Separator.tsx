import * as Primitive from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

import { Separator as UISeparator } from '@/components/ui'

type SeparatorRef = React.ComponentRef<typeof Primitive.Separator>
type SeparatorProps = React.ComponentPropsWithoutRef<typeof Primitive.Separator>

const Separator = forwardRef<SeparatorRef, SeparatorProps>(({
	className = '',
	...props
}, ref) => (
	<Primitive.Separator
		asChild
		className={`-mx-1 my-1 !w-auto ${className}`}
		ref={ref}
		{...props}
	>
		<UISeparator />
	</Primitive.Separator>
))

Separator.displayName = 'Separator'

export default Separator
