import NextLink from 'next/link'
import { Braces, Rss } from 'lucide-react'

import icon from '@/app/icon.svg'
import { Image, Link, Menu, Strong } from '@/components/ui'

type HeaderProps = Omit<React.ComponentProps<'header'>, 'children'>

const Header = ({
	className = '',
	...props
}: HeaderProps) => (
	<header className={`flex items-center justify-between ${className}`} {...props}>
		<Link className="group flex gap-4" href="/" variant="plain">
			<Image
				alt="Avatar"
				className="size-12 transition group-hover:-rotate-12 group-hover:scale-105 group-hover:drop-shadow-md"
				src={icon}
			/>

			<div className="grid gap-1">
				<Strong className="font-bold text-2xl/none group-hover:text-inherit">Osinga</Strong>
				<span className="font-medium text-sm/none text-secondary">On my interests</span>
			</div>
		</Link>

		<Menu modal={false}>
			<Menu.Trigger aria-label="Feeds">
				<Rss />
			</Menu.Trigger>
			<Menu.Content align="end">
				<Menu.Item asChild>
					<NextLink href="/posts/feed.atom"><Rss /> Atom</NextLink>
				</Menu.Item>
				<Menu.Item asChild>
					<NextLink href="/posts/feed.rss"><Rss /> RSS</NextLink>
				</Menu.Item>
				<Menu.Separator />
				<Menu.Item asChild>
					<NextLink href="/posts/feed.json"><Braces /> JSON</NextLink>
				</Menu.Item>
			</Menu.Content>
		</Menu>
	</header>
)

export default Header
