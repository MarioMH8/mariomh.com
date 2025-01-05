import type { AstroNavigationMenuLinkProperties } from '../astro';
import { classNameNavigationMenuLink } from '../class-name';
import type { ReactNavigationMenuLinkProperties } from '../react';
import type { NavigationMenuLinkVariantsProperties } from '../variants';

export default function properties<T extends AstroNavigationMenuLinkProperties | ReactNavigationMenuLinkProperties>(
	p?: NavigationMenuLinkVariantsProperties & T
): T {
	if (!p) {
		return {
			className: classNameNavigationMenuLink(p),
		} as T;
	}

	const {
		active: _active,
		asChild: _asChild,
		class: cls1,
		className: cls2,
		...rest
	} = p as AstroNavigationMenuLinkProperties & ReactNavigationMenuLinkProperties;

	return {
		...rest,
		className: classNameNavigationMenuLink(p satisfies T, cls1, cls2),
	} as T;
}
