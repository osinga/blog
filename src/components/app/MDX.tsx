// @ts-expect-error
import { getMDXComponent } from 'next-contentlayer/hooks'
import { isValidElement } from 'react'
import { readFileSync } from 'node:fs'

import { Blockquote, Code, Heading, Image, Link, List, Paragraph, Separator, Syntax } from '@/components/ui'

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
		<article className={`prose overflow-y-hidden ${className}`} {...props}>
			<Component components={{
				a: Link,
				code: Code,
				hr: Separator,
				li: List.Item,
				p: Paragraph,
				h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <Heading variant="h2" {...props} />,
				h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <Heading variant="h3" {...props} />,
				h4: (props: React.ComponentPropsWithoutRef<'h4'>) => <Heading variant="h4" {...props} />,
				ol: (props: React.ComponentPropsWithoutRef<'ol'>) => <List variant="ordered" {...props} />,
				ul: (props: React.ComponentPropsWithoutRef<'ul'>) => <List variant="unordered" {...props} />,
				blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => Array.isArray(props.children) ? (
					<Blockquote {...props.children.at(1).props} />
				) : null,
				pre: (props: React.ComponentPropsWithoutRef<'pre'>) => isValidElement(props.children) ? (
					// @ts-expect-error
					<Syntax lang={props.children.props.className.split('-').at(1)}>
						{props.children.props.children}
					</Syntax>
				) : null,
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
			}} />
		</article>
	)
}

export default MDX
