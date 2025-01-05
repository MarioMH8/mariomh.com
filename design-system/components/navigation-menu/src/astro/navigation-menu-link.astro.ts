import type { HTMLTag, Polymorphic } from 'astro/types';

import type { NAVIGATION_MENU_A_ELEMENT } from '../element';
import type { NavigationMenuLinkVariantsProperties } from '../variants';

type AstroNavigationMenuLinkHTMLAttributes<Tag extends HTMLTag = typeof NAVIGATION_MENU_A_ELEMENT> = Polymorphic<{
	as: Tag;
}> & {
	className?: string;
};

interface AstroNavigationMenuLinkProperties
	extends AstroNavigationMenuLinkHTMLAttributes,
		NavigationMenuLinkVariantsProperties {}

export type { AstroNavigationMenuLinkProperties };

export { default } from './navigation-menu-link-c.astro';
