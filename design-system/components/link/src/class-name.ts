import { merge } from '@mariomh/cva';
import focusVariants from '@mariomh/focus/variants';
import fontVariants from '@mariomh/font/variants';
import roundVariants from '@mariomh/round/variants';

import type { LinkVariantsProperties } from './variants';
import variants from './variants';

export default function cn(
	{ intent = 'primary', ...properties }: LinkVariantsProperties = {},
	...classLists: Parameters<typeof merge>
): string {
	return merge(
		fontVariants({ ...properties, intent }),
		roundVariants({ ...properties, dimension: properties.dimension === 'huge' ? '4xl' : properties.dimension }),
		focusVariants({ ...properties, intent }),
		variants({ ...properties, intent }),
		...classLists
	);
}
