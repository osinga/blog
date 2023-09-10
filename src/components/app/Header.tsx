import NextLink from 'next/link'
import { Braces, Rss } from 'lucide-react'

import { Avatar } from '@/components/app'
import { Link } from '@/components/ui'
import { Menu } from '@/components/ui/client'

type HeaderProps = Omit<React.ComponentPropsWithoutRef<'header'>, 'children'>

const Header = ({
	className = '',
	...props
}: HeaderProps) => (
	<header className={`flex items-center justify-between ${className}`} {...props}>
		<Link className="group flex gap-4" href="/" variant="plain">
			<Avatar className="h-12 transition group-hover:-rotate-12 group-hover:scale-105 group-hover:drop-shadow-md" />

			<div className="grid gap-1">
				<span className="font-bold text-2xl/none">Osinga</span>
				<span className="font-medium text-secondary text-sm/none">On my interests</span>
			</div>
		</Link>

		<Menu.Root>
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
		</Menu.Root>
	</header>
)

export default Header
