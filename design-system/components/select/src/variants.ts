import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({
	base: 'flex w-full border disabled:cursor-not-allowed disabled:opacity-50',
	compoundVariants: [
		{
			className: [
				'bg-primary-background dark:bg-primary-dark-background',
				'border-primary-border dark:border-primary-border',
			],
			variant: 'subtle',
			intent: 'primary',
		},
		{
			className: [
				'bg-secondary-background dark:bg-secondary-dark-background',
				'border-secondary-border dark:border-secondary-border',
			],
			variant: 'subtle',
			intent: 'secondary',
		},
		{
			className: [
				'bg-danger-background dark:bg-danger-dark-background',
				'border-danger-border dark:border-danger-border',
			],
			variant: 'subtle',
			intent: 'danger',
		},
		{
			className: [
				'bg-success-background dark:bg-success-dark-background',
				'border-success-border dark:border-success-border',
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
				'border-primary dark:border-primary-border',
				'text-primary-foreground dark:text-primary-dark-foreground',
				'bg-primary-background-subtle dark:bg-primary-dark-background-subtle',
				'placeholder:text-primary-foreground-muted/35 dark:placeholder:text-primary-dark-foreground-muted/35',
			],
			secondary: [
				'border-secondary dark:border-secondary-border',
				'text-secondary-foreground dark:text-secondary-dark-foreground',
				'bg-secondary-background-subtle dark:bg-secondary-dark-background-subtle',
				'placeholder:text-secondary-foreground-muted/35 dark:placeholder:text-secondary-dark-foreground-muted/35',
			],
			success: [
				'border-success dark:border-success-border',
				'text-success-foreground dark:text-success-dark-foreground',
				'bg-success-background-subtle dark:bg-success-dark-background-subtle',
				'placeholder:text-success-foreground-muted/35 dark:placeholder:text-success-dark-foreground-muted/35',
			],
			danger: [
				'border-danger dark:border-danger-border',
				'text-danger-foreground dark:text-danger-dark-foreground',
				'bg-danger-background-subtle dark:bg-danger-dark-background-subtle',
				'placeholder:text-danger-foreground-muted/35 dark:placeholder:text-danger-dark-foreground-muted/35',
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
