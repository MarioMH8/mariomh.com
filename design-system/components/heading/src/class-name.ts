import { merge } from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';
import fontVariants from '@mariomh/font/variants';

import type { AstroHeadingProperties } from './astro';
import type { HeadingVariantsProperties } from './variants';
import variants from './variants';

function getFontSize(
	properties: Partial<AstroHeadingProperties & HeadingVariantsProperties>
): FontVariantsProperties['dimension'] {
	if (properties.huge) {
		return 'unset';
	}
	const size = properties.heading ?? properties.as ?? 'h1';
	switch (size) {
		case 'h1': {
			return '4xl';
		}
		case 'h2': {
			return '3xl';
		}
		case 'h3': {
			return '2xl';
		}
		case 'h4': {
			return 'xl';
		}
		default: {
			return 'base';
		}
	}
}

export default function cn(properties?: HeadingVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	const { heading = 'h1', tracking, weight } = properties ?? {};
	const fontSize = getFontSize({ heading, ...properties });

	return merge(
		fontVariants({
			...properties,
			dimension: fontSize,
			tracking: tracking ?? 'sm',
			weight: weight ?? 'bold',
		}),
		variants({ heading, ...properties }),
		...classLists
	);
}
