import { merge } from '@mariomh/cva';
import focusVariants from '@mariomh/focus/variants';
import fontVariants from '@mariomh/font/variants';
import roundVariants from '@mariomh/round/variants';

import type { SelectVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties: SelectVariantsProperties = {}, ...classLists: Parameters<typeof merge>): string {
	return merge(
		fontVariants({
			family: properties.family,
			noSelect: properties.noSelect,
			tracking: properties.tracking,
			weight: properties.weight,
		}),
		roundVariants({ dimension: properties.dimension }),
		focusVariants(properties),
		variants(properties),
		...classLists
	);
}
