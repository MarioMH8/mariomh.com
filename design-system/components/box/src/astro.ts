import type { HTMLTag, Polymorphic } from 'astro/types';

import type ELEMENT_TYPE from './element';
import type { BoxVariantsProperties } from './variants';

type AstroBoxHTMLAttributes<Tag extends HTMLTag = typeof ELEMENT_TYPE> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroBoxProperties extends AstroBoxHTMLAttributes, BoxVariantsProperties {}

export { default } from './astro.astro';
