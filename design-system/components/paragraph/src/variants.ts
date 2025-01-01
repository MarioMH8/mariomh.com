import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({
	base: 'block mb-6',
	defaultVariants: {
		dimension: 'base',
	},
	variants: {
		dimension: {
			'2xl': 'leading-10',
			'3xl': 'leading-[2.75rem]',
			'4xl': 'leading-[3rem]',
			base: 'leading-7',
			huge: 'text-9xl leading-[10rem]',
			lg: 'leading-8',
			sm: 'leading-6',
			unset: '',
			xl: 'leading-9',
			xs: 'leading-5',
		},
	},
});

export type ParagraphVariantsProperties = Partial<FontVariantsProperties> & VariantProperties<typeof variants>;

export default variants;
