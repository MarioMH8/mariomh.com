import type { HTMLTag, Polymorphic } from 'astro/types';

import type { NAVIGATION_MENU_UL_ELEMENT } from '../element';
import type { NavigationMenuULVariantsProperties } from '../variants';

type AstroNavigationMenuULHTMLAttributes<Tag extends HTMLTag = typeof NAVIGATION_MENU_UL_ELEMENT> = Polymorphic<{
	as: Tag;
}> & {
	className?: string;
};

interface AstroNavigationMenuULProperties
	extends AstroNavigationMenuULHTMLAttributes,
		NavigationMenuULVariantsProperties {}

export type { AstroNavigationMenuULProperties };

export { default } from './navigation-menu-ul-c.astro';
