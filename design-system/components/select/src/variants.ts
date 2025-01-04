import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({
	base: 'flex w-full border disabled:cursor-not-allowed disabled:opacity-50',
	compoundVariants: [
		{
			className: [
				'bg-primary-background-subtle dark:bg-primary-dark-background-subtle',
				'border-primary-border-subtle dark:border-primary-dark-border-subtle',
			],
			variant: 'subtle',
			intent: 'primary',
		},
		{
			className: [
				'bg-secondary-background-subtle dark:bg-secondary-dark-background-subtle',
				'border-secondary-border-subtle dark:border-secondary-dark-border-subtle',
			],
			variant: 'subtle',
			intent: 'secondary',
		},
		{
			className: [
				'bg-danger-background-subtle dark:bg-danger-dark-background-subtle',
				'border-danger-border-subtle dark:border-danger-dark-border-subtle',
			],
			variant: 'subtle',
			intent: 'danger',
		},
		{
			className: [
				'bg-success-background-subtle dark:bg-success-dark-background-subtle',
				'border-success-border-subtle dark:border-success-dark-border-subtle',
			],
			variant: 'subtle',
			intent: 'success',
		},
	],
	defaultVariants: {
		dimension: 'base',
		intent: 'primary',
	},
	variants: {
		dimension: {
			unset: '',
			xs: 'px-2 py-1',
			sm: 'px-3 py-2',
			base: 'px-4 py-3',
			lg: 'px-5 py-4',
			xl: 'px-6 py-5',
			'2xl': 'px-7 py-6',
			'3xl': 'px-8 py-7',
			'4xl': 'px-9 py-8',
			'5xl': 'px-10 py-9',
			'6xl': 'px-11 py-10',
		},
		intent: {
			primary: [
				'border-primary-border dark:border-primary-dark-border',
				'text-primary-foreground dark:text-primary-dark-foreground',
				'bg-primary-background-element dark:bg-primary-dark-background-element',
			],
			secondary: [
				'border-secondary-border dark:border-secondary-dark-border',
				'text-secondary-foreground dark:text-secondary-dark-foreground',
				'bg-secondary-background-element dark:bg-secondary-dark-background-element',
			],
			success: [
				'border-success-border dark:border-success-dark-border',
				'text-success-foreground dark:text-success-dark-foreground',
				'bg-success-background-element dark:bg-success-dark-background-element',
			],
			danger: [
				'border-danger-border dark:border-danger-dark-border',
				'text-danger-foreground dark:text-danger-dark-foreground',
				'bg-danger-background-element dark:bg-danger-dark-background-element',
			],
		},
		variant: {
			subtle: '',
			transparent: 'bg-transparent dark:bg-transparent',
		},
	},
});

export type SelectVariantsProperties = Partial<
	Pick<FontVariantsProperties, 'family' | 'noSelect' | 'tracking' | 'weight'>
> &
	VariantProperties<typeof variants>;

export default variants;
