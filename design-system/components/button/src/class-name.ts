import { merge } from '@mariomh/cva';
import focusVariants from '@mariomh/focus/variants';
import fontVariants from '@mariomh/font/variants';
import linkClassName from '@mariomh/link/class-name';
import roundVariants from '@mariomh/round/variants';

import type { ButtonVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties: ButtonVariantsProperties = {}, ...classLists: Parameters<typeof merge>): string {
	if (properties.variant === 'link') {
		return linkClassName({ ...properties, intent: properties.intent ?? 'secondary' });
	}

	return merge(
		fontVariants({
			family: properties.family,
			intent: 'unset',
			noSelect: properties.noSelect,
			tracking: properties.tracking,
			weight: properties.weight,
		}),
		roundVariants({ dimension: properties.icon ? 'full' : properties.dimension }),
		focusVariants(properties),
		variants(properties),
		classLists
	);
}
