import type { HTMLTag, Polymorphic } from 'astro/types';

import type ELEMENT_TYPE from './element';
import type { HeadingVariantsProperties } from './variants';

type AstroHeadingHTMLAttributes<Tag extends HTMLTag = typeof ELEMENT_TYPE> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroHeadingProperties extends AstroHeadingHTMLAttributes, HeadingVariantsProperties {}

export { default } from './astro.astro';
