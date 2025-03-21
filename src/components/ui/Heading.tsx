type HeadingProps<
	Type extends React.ElementType = keyof typeof styles.variants
> = React.ComponentProps<Type> & {
	as?: keyof typeof styles.variants
	variant: Type
}

const Heading = ({
	as,
	className = '',
	variant: Component,
	...props
}: HeadingProps) => (
	<Component
		className={`text-balance text-primary tracking-tight ${styles.prose} ${styles.variants[as || Component]} ${className}`}
		{...props}
	/>
)

const styles = {
	prose: 'prose:mt-[1em] prose:-mb-[0.2em] prose:first:mt-0',
	variants: {
		h1: 'font-bold text-2xl sm:text-4xl md:text-5xl',
		h2: 'font-semibold text-xl sm:text-3xl md:text-4xl',
		h3: 'font-semibold text-lg sm:text-2xl md:text-3xl',
		h4: 'font-semibold text-base sm:text-lg md:text-xl',
	},
}

export default Heading
