import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';

const variants = cva({
	compoundVariants: [
		{
			className: 'tracking-tight',
			family: 'primary',
			tracking: 'sm',
		},
		{
			className: 'tracking-wide',
			family: 'primary',
			tracking: 'base',
		},
		{
			className: 'tracking-wider',
			family: 'primary',
			tracking: 'lg',
		},
		{
			className: 'tracking-normal',
			family: 'secondary',
			tracking: 'sm',
		},
		{
			className: 'tracking-wide',
			family: 'secondary',
			tracking: 'base',
		},
		{
			className: 'tracking-wider',
			family: 'secondary',
			tracking: 'lg',
		},
		{
			className: 'text-primary-foreground/65 dark:text-primary-dark-foreground/65',
			variant: 'muted',
			intent: 'primary',
		},
		{
			className: 'text-primary dark:text-primary-dark',
			variant: 'bright',
			intent: 'primary',
		},
	],
	defaultVariants: {
		dimension: 'base',
		family: 'secondary',
		intent: 'primary',
		tracking: 'base',
		weight: 'base',
	},
	variants: {
		align: {
			center: 'text-center',
			end: 'text-right',
			start: 'text-left',
		},
		dimension: {
			unset: '',
			xs: 'text-xs',
			sm: 'text-sm',
			base: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
			'2xl': 'text-2xl',
			'3xl': 'text-3xl',
			'4xl': 'text-4xl',
			'5xl': 'text-5xl',
			'6xl': 'text-6xl',
			huge: 'text-8xl',
		},
		family: {
			primary: 'font-primary',
			secondary: 'font-secondary',
		},
		intent: {
			primary: [
				'text-primary-foreground dark:text-primary-dark-foreground',
				'selection:bg-primary-background-active dark:selection:text-primary-foreground',
			],
			unset: '',
		},
		noSelect: {
			true: 'select-none',
		},
		tracking: {
			base: '',
			lg: '',
			sm: '',
		},
		variant: {
			bright: '',
			muted: '',
		},
		weight: {
			base: 'font-normal',
			bold: 'font-semibold',
			light: 'font-light',
			medium: 'font-medium',
		},
	},
});

export type FontVariantsProperties = VariantProperties<typeof variants>;

export default variants;
