import type { AstroNavigationMenuProperties } from '../astro';
import { classNameNavigationMenu } from '../class-name';
import type { ReactNavigationMenuProperties } from '../react';
import type { NavigationMenuVariantsProperties } from '../variants';

export default function properties<T extends AstroNavigationMenuProperties | ReactNavigationMenuProperties>(
	p?: NavigationMenuVariantsProperties & T
): T {
	if (!p) {
		return {
			className: classNameNavigationMenu(p),
		} as T;
	}

	const {
		asChild: _asChild,
		class: cls1,
		className: cls2,
		...rest
	} = p as AstroNavigationMenuProperties & ReactNavigationMenuProperties;

	return {
		...rest,
		className: classNameNavigationMenu(p satisfies T, cls1, cls2),
	} as T;
}
