import type { HTMLTag, Polymorphic } from 'astro/types';

import type { NAVIGATION_MENU_LI_ELEMENT } from '../element';
import type { NavigationMenuLIVariantsProperties } from '../variants';

type AstroNavigationMenuLIHTMLAttributes<Tag extends HTMLTag = typeof NAVIGATION_MENU_LI_ELEMENT> = Polymorphic<{
	as: Tag;
}> & {
	className?: string;
};

interface AstroNavigationMenuLIProperties
	extends AstroNavigationMenuLIHTMLAttributes,
		NavigationMenuLIVariantsProperties {}

export type { AstroNavigationMenuLIProperties };

export { default } from './navigation-menu-li-c.astro';
