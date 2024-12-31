import type { HTMLTag, Polymorphic } from 'astro/types';

import type ELEMENT_TYPE from './element';
import type { ButtonVariantsProperties } from './variants';

type AstroButtonHTMLAttributes<Tag extends HTMLTag = typeof ELEMENT_TYPE> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroButtonProperties extends AstroButtonHTMLAttributes, ButtonVariantsProperties {}

export { default } from './astro.astro';
