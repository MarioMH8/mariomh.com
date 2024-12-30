import { merge } from '@mariomh/cva';
import fontVariants from '@mariomh/font/variants';
import type { RoundVariantsProperties } from '@mariomh/round/variants';
import roundVariants from '@mariomh/round/variants';
import shadowVariants from '@mariomh/shadow/variants';

import type { BadgeVariantsProperties } from './variants';
import variants from './variants';

function roundSize(properties?: BadgeVariantsProperties): RoundVariantsProperties['dimension'] {
	switch (properties?.dimension) {
		case '2xl':
		case '3xl':
		case '4xl':
		case 'huge':
		case 'unset': {
			return '2xl';
		}
		case 'base':
		case 'lg':
		case undefined:
		case 'xl': {
			return 'lg';
		}
		case 'sm':
		case 'xs': {
			return 'base';
		}
	}
}
export default function cn(properties?: BadgeVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(
		fontVariants({ ...properties, variant: properties?.variant ?? 'secondary' }),
		roundVariants({ dimension: roundSize(properties) }),
		properties?.shadow ? shadowVariants({ dimension: properties.shadow }) : undefined,
		variants(properties),
		...classLists
	);
}
