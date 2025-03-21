import { codeToHtml, type BuiltinLanguage } from 'shikiji'

// Source: https://github.com/sindresorhus/strip-indent
const stripIndent = (string: string) => {
	const indent = string
		.match(/^[ \t]*(?=\S)/gm)
		?.reduce((indent, whitespace) => Math.min(indent, whitespace.length), Infinity) || 0

	return string.replace(
		new RegExp(`^[ \\t]{${indent}}`, 'gm'),
		'',
	).trim()
}

type SyntaxProps = Omit<React.ComponentProps<'div'>, 'children'> & {
	children: string
	lang: BuiltinLanguage
	title?: string
}

const Syntax = async ({
	children,
	className = '',
	lang,
	title,
	...props
}: SyntaxProps) => {
	const code = stripIndent(children)
	const html = await codeToHtml(code, {
		lang,
		themes: {
			dark: 'github-dark',
			light: 'min-light',
		},
	})

	return (
		<div
			className={`w-full border rounded-lg text-xs prose:my-7 prose:[li_&]:my-4 ${className}`}
			{...props}
		>
			{title && (
				<header className="px-4 py-2 bg-gray-50 border-b font-mono font-semibold dark:bg-gray-900">
					{title}
				</header>
			)}
			<div
				className={[
					'py-4 overflow-x-auto [tab-size:2]',
					'[&_pre]:[--shiki-dark-bg:transparent_!important]',
					'dark:[&_.shiki]:!bg-[--shiki-dark-bg] dark:[&_.shiki_span]:!text-[--shiki-dark]',
					...(lang === 'bash' ? [
						'[&_.line]:px-4',
					] : [
						'[&_code]:[counter-reset:line]',
						'[&_.line]:pr-4',
						'[&_.line::before]:sticky [&_.line::before]:left-0',
						'[&_.line::before]:inline-block [&_.line::before]:mr-3 [&_.line::before]:w-8 [&_.line::before]:pr-1',
						'[&_.line::before]:bg-background [&_.line::before]:text-end [&_.line::before]:text-tertiary',
						'[&_.line::before]:content-[counter(line)] [&_.line::before]:[counter-increment:line]',
					]),
				].join(' ')}
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</div>
	)
}

export default Syntax
