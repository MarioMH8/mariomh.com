import type { HTMLTag, Polymorphic } from 'astro/types';

import type ELEMENT_TYPE from './element';
import type { ParagraphVariantsProperties } from './variants';

type AstroParagraphHTMLAttributes<Tag extends HTMLTag = typeof ELEMENT_TYPE> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroParagraphProperties extends AstroParagraphHTMLAttributes, ParagraphVariantsProperties {}

export { default } from './astro.astro';
