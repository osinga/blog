import * as Primitive from '@radix-ui/react-dropdown-menu'

import { Separator as UISeparator } from '@/components/ui'

type SeparatorProps = React.ComponentProps<typeof Primitive.Separator>

const Separator = ({
	className = '',
	...props
}: SeparatorProps) => (
	<Primitive.Separator
		asChild
		className={`-mx-1 my-1 !w-auto ${className}`}
		{...props}
	>
		<UISeparator />
	</Primitive.Separator>
)

export default Separator
