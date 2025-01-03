import type { HTMLTag, Polymorphic } from 'astro/types';

import type ELEMENT_TYPE from './element';
import type { SelectVariantsProperties } from './variants';

type AstroSelectHTMLAttributes<Tag extends HTMLTag = typeof ELEMENT_TYPE> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroSelectProperties extends AstroSelectHTMLAttributes, SelectVariantsProperties {}

export { default } from './astro.astro';
