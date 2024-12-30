import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({
	base: 'block',
	compoundVariants: [
		{
			className: 'mb-12 leading-[3rem]',
			heading: 'h1',
			huge: undefined,
		},
		{
			className: 'mb-8 leading-[2.75rem]',
			heading: 'h2',
			huge: undefined,
		},
		{
			className: 'mb-6 leading-10',
			heading: 'h3',
			huge: undefined,
		},
		{
			className: 'mb-4 leading-9',
			heading: 'h4',
			huge: undefined,
		},
		{
			className: 'mb-12 leading-[3rem]',
			heading: 'h1',
			huge: false,
		},
		{
			className: 'mb-8 leading-[2.75rem]',
			heading: 'h2',
			huge: false,
		},
		{
			className: 'mb-6 leading-10',
			heading: 'h3',
			huge: false,
		},
		{
			className: 'mb-4 leading-9',
			heading: 'h4',
			huge: false,
		},
		{
			className: 'leading-[10rem]',
			heading: 'h1',
			huge: true,
		},
		{
			className: 'leading-[10rem]',
			heading: 'h2',
			huge: true,
		},
		{
			className: 'leading-[10rem]',
			heading: 'h3',
			huge: true,
		},
		{
			className: 'leading-[10rem]',
			heading: 'h4',
			huge: true,
		},
	],
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
