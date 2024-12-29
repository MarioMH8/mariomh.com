import type { HTMLTag, Polymorphic } from 'astro/types';

import type { LinkVariantsProperties } from './variants';

type AstroLinkHTMLAttributes<Tag extends HTMLTag = 'a'> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroLinkProperties extends AstroLinkHTMLAttributes, LinkVariantsProperties {}

export { default } from './astro.astro';
