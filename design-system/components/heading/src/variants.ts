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
			h1: '',
			h2: '',
			h3: '',
			h4: '',
		},
		huge: {
			true: 'text-9xl mb-12',
		},
	},
});

export type HeadingVariantsProperties = Partial<Omit<FontVariantsProperties, 'dimension'>> &
	VariantProperties<typeof variants>;

export default variants;
