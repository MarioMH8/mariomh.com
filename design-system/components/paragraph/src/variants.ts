import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({
	base: 'block mb-6',
	defaultVariants: {
		dimension: 'base',
		wrap: true,
	},
	variants: {
		dimension: {
			'2xl': 'leading-10',
			'3xl': 'leading-[2.75rem]',
			'4xl': 'leading-[3rem]',
			base: 'leading-7',
			huge: 'leading-[10rem]',
			lg: 'leading-8',
			sm: 'leading-6',
			unset: '',
			xl: 'leading-9',
			xs: 'leading-5',
		},
		wrap: {
			true: 'max-w-[75ch]',
			false: '!max-w-none',
		},
	},
});

export type ParagraphVariantsProperties = Partial<Pick<FontVariantsProperties, 'align' | 'dimension' | 'noSelect'>> &
	VariantProperties<typeof variants>;

export default variants;
