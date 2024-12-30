import type { HTMLTag, Polymorphic } from 'astro/types';

import type ELEMENT_TYPE from './element';
import type { BadgeVariantsProperties } from './variants';

type AstroBadgeHTMLAttributes<Tag extends HTMLTag = typeof ELEMENT_TYPE> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroBadgeProperties extends AstroBadgeHTMLAttributes, BadgeVariantsProperties {}

export { default } from './astro.astro';
