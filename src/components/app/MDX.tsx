import { Children, isValidElement } from 'react'
// @ts-expect-error
import { getMDXComponent } from 'next-contentlayer/hooks'
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

type MDXProps = Omit<React.ComponentPropsWithoutRef<'article'>, 'children'> & {
	children: Parameters<typeof getMDXComponent>[0]
}

const MDX = ({
	children,
	className = '',
	...props
}: MDXProps) => {
	const Component = getMDXComponent(children)

	return (
		<article className={`prose overflow-x-hidden ${className}`} {...props}>
			<Component components={{
				a: Link,
				code: Code,
				hr: Separator,
				li: List.Item,
				p: Paragraph,
				strong: Strong,
				h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <Heading variant="h2" {...props} />,
				h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <Heading variant="h3" {...props} />,
				h4: (props: React.ComponentPropsWithoutRef<'h4'>) => <Heading variant="h4" {...props} />,
				ol: (props: React.ComponentPropsWithoutRef<'ol'>) => <List variant="ordered" {...props} />,
				ul: (props: React.ComponentPropsWithoutRef<'ul'>) => <List variant="unordered" {...props} />,
				blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => {
					const child = Children.toArray(props.children).at(1) as React.ReactElement
					const [type, ...content] = child.props.children

					return ['Note', 'Warning'].includes(type.props?.children)
						? <Callout variant={type.props.children.toLowerCase()}>{content}</Callout>
						: <Blockquote {...child.props} />
				},
				img: (props: Required<Pick<React.ComponentPropsWithoutRef<'img'>, 'alt' | 'src'>>) => {
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
				pre: (props: React.ComponentPropsWithoutRef<'pre'>) => isValidElement(props.children) ? (
					<Syntax lang={props.children.props.className.split('-').at(1)}>
						{props.children.props.children}
					</Syntax>
				) : null,
			}} />
		</article>
	)
}

export default MDX
