import type { HTMLTag, Polymorphic } from 'astro/types';

import type ELEMENT_TYPE from './element';
import type { TextareaVariantsProperties } from './variants';

type AstroTextareaHTMLAttributes<Tag extends HTMLTag = typeof ELEMENT_TYPE> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroTextareaProperties extends AstroTextareaHTMLAttributes, TextareaVariantsProperties {}

export { default } from './astro.astro';
