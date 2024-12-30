import type { HTMLTag, Polymorphic } from 'astro/types';

import type ELEMENT_TYPE from './element';
import type { LinkVariantsProperties } from './variants';

type AstroLinkHTMLAttributes<Tag extends HTMLTag = typeof ELEMENT_TYPE> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroLinkProperties extends AstroLinkHTMLAttributes, LinkVariantsProperties {}

export { default } from './astro.astro';
