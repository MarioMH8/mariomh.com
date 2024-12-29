import type { VariantProperties } from '@mariomh/desing-system/cva';
import cva from '@mariomh/desing-system/cva';

const variants = cva({
	base: '',
	compoundVariants: [
		{
			className: '',
			only: undefined,
			size: 'unset',
		},
		{
			className: 'rounded-sm',
			only: undefined,
			size: 'xs',
		},
		{
			className: 'rounded-md',
			only: undefined,
			size: 'sm',
		},
		{
			className: 'rounded-lg',
			only: undefined,
			size: 'base',
		},
		{
			className: 'rounded-xl',
			only: undefined,
			size: 'lg',
		},
		{
			className: 'rounded-2xl',
			only: undefined,
			size: 'xl',
		},
		{
			className: 'rounded-3xl',
			only: undefined,
			size: '2xl',
		},
		{
			className: 'rounded-4xl',
			only: undefined,
			size: '3xl',
		},
		{
			className: 'rounded-5xl',
			only: undefined,
			size: '4xl',
		},
		{
			className: 'rounded-full',
			only: undefined,
			size: 'full',
		},
		{
			className: '',
			only: 'sm',
			size: 'unset',
		},
		{
			className: 'sm:rounded-sm',
			only: 'sm',
			size: 'xs',
		},
		{
			className: 'sm:rounded-md',
			only: 'sm',
			size: 'sm',
		},
		{
			className: 'sm:rounded-lg',
			only: 'sm',
			size: 'base',
		},
		{
			className: 'sm:rounded-xl',
			only: 'sm',
			size: 'lg',
		},
		{
			className: 'sm:rounded-2xl',
			only: 'sm',
			size: 'xl',
		},
		{
			className: 'sm:rounded-3xl',
			only: 'sm',
			size: '2xl',
		},
		{
			className: 'sm:rounded-3xl',
			only: 'sm',
			size: '3xl',
		},
		{
			className: 'sm:rounded-3xl',
			only: 'sm',
			size: '4xl',
		},
		{
			className: 'sm:rounded-full',
			only: 'sm',
			size: 'full',
		},
	],
	defaultVariants: {
		size: 'base',
	},
	variants: {
		only: {
			sm: '',
		},
		size: {
			'2xl': '',
			'3xl': '',
			'4xl': '',
			base: '',
			full: '',
			lg: '',
			sm: '',
			unset: '',
			xl: '',
			xs: '',
		},
	},
});

export type RoundVariantsProperties = VariantProperties<typeof variants>;

export default variants;
