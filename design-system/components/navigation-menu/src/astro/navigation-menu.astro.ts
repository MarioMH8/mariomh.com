import type { HTMLTag, Polymorphic } from 'astro/types';

import type { NAVIGATION_MENU_ELEMENT } from '../element';
import type { NavigationMenuVariantsProperties } from '../variants';

type AstroNavigationMenuHTMLAttributes<Tag extends HTMLTag = typeof NAVIGATION_MENU_ELEMENT> = Polymorphic<{
	as: Tag;
}> & {
	className?: string;
};

interface AstroNavigationMenuProperties extends AstroNavigationMenuHTMLAttributes, NavigationMenuVariantsProperties {}

export type { AstroNavigationMenuProperties };

export { default } from './navigation-menu-c.astro';
