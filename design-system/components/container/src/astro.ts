import type { HTMLTag, Polymorphic } from 'astro/types';

import type ELEMENT_TYPE from './element';
import type { ContainerVariantsProperties } from './variants';

type AstroContainerHTMLAttributes<Tag extends HTMLTag = typeof ELEMENT_TYPE> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroContainerProperties extends AstroContainerHTMLAttributes, ContainerVariantsProperties {}

export { default } from './astro.astro';
