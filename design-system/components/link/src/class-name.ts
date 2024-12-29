import { merge } from '@mariomh/cva';
import focusVariants from '@mariomh/focus/variants';
import fontVariants from '@mariomh/font/variants';
import roundVariants from '@mariomh/round/variants';

import type { LinkVariantsProperties } from './variants';
import variants from './variants';

export default function cn(
	{ variant = 'primary', ...properties }: LinkVariantsProperties = {},
	...classLists: Parameters<typeof merge>
): string {
	return merge(
		fontVariants({ ...properties, variant }),
		roundVariants({ ...properties, dimension: properties.dimension === 'huge' ? '4xl' : properties.dimension }),
		focusVariants({ ...properties, variant }),
		variants({ ...properties, variant }),
		...classLists
	);
}
