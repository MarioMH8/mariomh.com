import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({
	base: 'block',
	defaultVariants: {
		heading: 'h1',
	},
	variants: {
		heading: {
			h1: 'mb-8',
			h2: 'mb-6',
			h3: 'mb-4',
			h4: 'mb-2',
		},
		huge: {
			true: 'text-9xl mb-12',
		},
	},
});

export type HeadingVariantsProperties = Partial<Omit<FontVariantsProperties, 'dimension'>> &
	VariantProperties<typeof variants>;

export default variants;
