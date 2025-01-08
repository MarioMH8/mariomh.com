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
			h5: 'mb-1 uppercase',
		},
		huge: {
			true: 'text-9xl mb-12',
		},
		subtitle: {
			true: '',
		},
	},
});

export type HeadingVariantsProperties = Partial<Pick<FontVariantsProperties, 'align' | 'noSelect'>> &
	VariantProperties<typeof variants>;

export default variants;
