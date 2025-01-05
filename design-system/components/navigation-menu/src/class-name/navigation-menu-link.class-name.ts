import { merge } from '@mariomh/cva';

import type { NavigationMenuLinkVariantsProperties } from '../variants';
import { variantsNavigationMenuLink } from '../variants';

export default function cn(
	properties: NavigationMenuLinkVariantsProperties = {},
	...classLinksts: Parameters<typeof merge>
): string {
	return merge(variantsNavigationMenuLink(properties), ...classLinksts);
}
