'use client'

import * as Primitive from '@radix-ui/react-separator'
import { forwardRef } from 'react'

type SeparatorRef = React.ComponentRef<typeof Primitive.Root>
type SeparatorProps = React.ComponentPropsWithoutRef<typeof Primitive.Root>

const Separator = forwardRef<SeparatorRef, SeparatorProps>(({
	className = '',
	decorative = true,
	orientation = 'horizontal',
	...props
}, ref) => (
	<Primitive.Root
		className={[
			'bg-border rounded-full',
			styles.prose,
			styles.variants[orientation],
			className,
		].join(' ')}
		decorative={decorative}
		orientation={orientation}
		ref={ref}
		{...props}
	/>
))

const styles = {
	prose: 'prose:my-8 prose:sm:my-14',
	variants: {
		horizontal: 'h-px w-full',
		vertical: 'h-full w-px',
	},
}

Separator.displayName = 'Separator'

export default Separator
