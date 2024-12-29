import focusVariants from '@mariomh/desing-system/components/focus/variants';
import fontVariants from '@mariomh/desing-system/components/font/variants';
import roundVariants from '@mariomh/desing-system/components/round/variants';
import { merge } from '@mariomh/desing-system/cva';

import type { LinkVariantsProperties } from './variants';
import variants from './variants';

export default function cn(
	{ variant = 'primary', ...properties }: LinkVariantsProperties = {},
	...classLists: Parameters<typeof merge>
): string {
	return merge(
		fontVariants({ ...properties, variant }),
		roundVariants({ size: properties.size === 'huge' ? '4xl' : properties.size }),
		focusVariants({ ...properties, variant }),
		variants({ ...properties, variant }),
		...classLists
	);
}
