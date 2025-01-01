import type { HTMLTag, Polymorphic } from 'astro/types';

import type { LogoVariantsProperties } from './variants';

type AstroLogoHTMLAttributes<Tag extends HTMLTag = 'span'> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroLogoProperties extends AstroLogoHTMLAttributes, LogoVariantsProperties {}

export { default } from './astro.astro';
