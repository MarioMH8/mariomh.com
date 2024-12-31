import type { HTMLTag, Polymorphic } from 'astro/types';

import type ELEMENT_TYPE from './element';
import type { InputVariantsProperties } from './variants';

type AstroInputHTMLAttributes<Tag extends HTMLTag = typeof ELEMENT_TYPE> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroInputProperties extends AstroInputHTMLAttributes, Omit<InputVariantsProperties, 'type'> {}

export { default } from './astro.astro';
