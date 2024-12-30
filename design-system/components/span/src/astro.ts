import type { HTMLTag, Polymorphic } from 'astro/types';

import type ELEMENT_TYPE from './element';
import type { SpanVariantsProperties } from './variants';

type AstroSpanHTMLAttributes<Tag extends HTMLTag = typeof ELEMENT_TYPE> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroSpanProperties extends AstroSpanHTMLAttributes, SpanVariantsProperties {}

export { default } from './astro.astro';
