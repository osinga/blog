import * as runtime from 'react/jsx-runtime'
import { Children, isValidElement } from 'react'
import { readFileSync } from 'node:fs'

import {
	Blockquote,
	Callout,
	Code,
	Heading,
	Image,
	Link,
	List,
	Paragraph,
	Separator,
	Strong,
	Syntax,
} from '@/components/ui'

const useMDXComponent = (body: string) => {
	const fn = new Function(body)
	return fn({ ...runtime }).default
}

type MDXProps = Omit<React.ComponentProps<'article'>, 'children'> & {
	children: Parameters<typeof useMDXComponent>[0]
}

const MDX = ({
	children,
	className = '',
	...props
}: MDXProps) => {
	const Component = useMDXComponent(children)

	return (
		<article className={`prose overflow-x-hidden ${className}`} {...props}>
			<Component components={{
				a: Link,
				code: Code,
				hr: Separator,
				li: List.Item,
				p: Paragraph,
				strong: Strong,
				h2: (props: React.ComponentProps<'h2'>) => <Heading variant="h2" {...props} />,
				h3: (props: React.ComponentProps<'h3'>) => <Heading variant="h3" {...props} />,
				h4: (props: React.ComponentProps<'h4'>) => <Heading variant="h4" {...props} />,
				ol: (props: React.ComponentProps<'ol'>) => <List variant="ordered" {...props} />,
				ul: (props: React.ComponentProps<'ul'>) => <List variant="unordered" {...props} />,
				blockquote: (props: React.ComponentProps<'blockquote'>) => {
					const child = Children.toArray(props.children).at(1) as React.ReactElement
					let variant

					const content = Children.map((child as any).props.children, (child, index) => {
						const regex = /^\[\!(NOTE|WARNING)\]/

						const match = index === 0 && typeof child === 'string' && child.match(regex)
						if (!match) return child

						variant = match[1].toLowerCase()
						return child.replace(regex, '')
					})

					return variant
						? <Callout variant={variant}>{content}</Callout>
						: <Blockquote {...(child as any).props} />
				},
				img: (props: Required<Pick<React.ComponentProps<'img'>, 'alt' | 'src'>>) => {
					const image = readFileSync(`${process.cwd()}/public${props.src}`)

					return (
						// eslint-disable-next-line jsx-a11y/alt-text
						<Image
							className="rounded-md"
							height={image.readUInt32BE(20)}
							width={image.readUInt32BE(16)}
							{...props}
						/>
					)
				},
				pre: (props: React.ComponentProps<'pre'>) => isValidElement(props.children) ? (
					<Syntax lang={(props.children.props as any).className.split('-').at(1)}>
						{(props.children.props as any).children}
					</Syntax>
				) : null,
			}} />
		</article>
	)
}

export default MDX
