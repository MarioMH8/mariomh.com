import type { HTMLTag, Polymorphic } from 'astro/types';

import ELEMENT_TYPE from './element';
import type { CopyrightVariantsProperties } from './variants';

type AstroCopyrightHTMLAttributes<Tag extends HTMLTag = typeof ELEMENT_TYPE> = Polymorphic<{ as: Tag }> & {
	className?: string;
};

export interface AstroCopyrightProperties extends AstroCopyrightHTMLAttributes, CopyrightVariantsProperties {}

export { default } from './astro.astro';
