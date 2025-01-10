import AstroIcon from '@app/features/icons/astro.astro';
import CssIcon from '@app/features/icons/css.astro';
import GitIcon from '@app/features/icons/git.astro';
import GithubIcon from '@app/features/icons/github.astro';
import HTMLIcon from '@app/features/icons/html.astro';
import JavaScriptIcon from '@app/features/icons/javascript.astro';
import LinkedinIcon from '@app/features/icons/linkedin.astro';
import SQLIcon from '@app/features/icons/mysql.astro';
import NodeJSIcon from '@app/features/icons/node.astro';
import ReactIcon from '@app/features/icons/react.astro';
import TailwindIcon from '@app/features/icons/tailwind.astro';
import XIcon from '@app/features/icons/x.astro';
import type { HTMLTag } from 'astro/types';

const SOCIAL_ICONS = {
	GitHub: GithubIcon,
	LinkedIn: LinkedinIcon,
	'X (Twitter)': XIcon,
} as Record<string, HTMLTag>;

const SKILLS_ICONS = {
	Astro: AstroIcon,
	CSS: CssIcon,
	Git: GitIcon,
	GitHub: GithubIcon,
	HTML: HTMLIcon,
	JavaScript: JavaScriptIcon,
	MySQL: SQLIcon,
	NodeJS: NodeJSIcon,
	React: ReactIcon,
	Tailwind: TailwindIcon,
} as Record<string, HTMLTag>;

export { SKILLS_ICONS, SOCIAL_ICONS };

export { default as ArrowIcon } from '@app/features/icons/arrow.astro';
export { default as AstroIcon } from '@app/features/icons/astro.astro';
export { default as CaretDownIcon } from '@app/features/icons/caret-down.astro';
export { default as CssIcon } from '@app/features/icons/css.astro';
export { default as GitIcon } from '@app/features/icons/git.astro';
export { default as GithubIcon } from '@app/features/icons/github.astro';
export { default as HTMLIcon } from '@app/features/icons/html.astro';
export { default as JavaScriptIcon } from '@app/features/icons/javascript.astro';
export { default as LinkedinIcon } from '@app/features/icons/linkedin.astro';
export { default as SQLIcon } from '@app/features/icons/mysql.astro';
export { default as NodeJSIcon } from '@app/features/icons/node.astro';
export { default as ReactIcon } from '@app/features/icons/react.astro';
export { default as TailwindIcon } from '@app/features/icons/tailwind.astro';
export { default as XIcon } from '@app/features/icons/x.astro';
