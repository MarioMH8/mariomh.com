import type { HTMLTag, Polymorphic } from 'astro/types';

import type ELEMENT_TYPE from './element';
import type { LabelVariantsProperties } from './variants';

type AstroLabelHTMLAttributes<Tag extends HTMLTag = typeof ELEMENT_TYPE> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroLabelProperties extends AstroLabelHTMLAttributes, LabelVariantsProperties {}

export { default } from './astro.astro';
