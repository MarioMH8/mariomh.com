import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';

const variants = cva({
	base: [
		'transition-colors',
		'appearance-none flex items-center justify-center',
		'disabled:pointer-events-none disabled:opacity-50',
	],
	compoundVariants: [
		{
			bordered: undefined,
			className: 'border',
			variant: 'transparent',
		},
		{
			className: 'bg-primary-background-solid',
			variant: 'bright',
			intent: 'primary',
		},
		{
			className: 'bg-secondary-background-solid text-secondary-foreground-invert hover:text-secondary-foreground',
			variant: 'bright',
			intent: 'secondary',
		},
		{
			className: 'bg-danger-background-solid text-danger-foreground-invert hover:text-danger-foreground',
			variant: 'bright',
			intent: 'danger',
		},
		{
			className: 'bg-success-background-solid text-success-foreground-invert hover:text-success-foreground',
			variant: 'bright',
			intent: 'success',
		},
	],
	defaultVariants: {
		dimension: 'base',
		intent: 'secondary',
	},
	variants: {
		bordered: {
			true: 'border',
		},
		dimension: {
			'2xl': 'h-12 w-12 [&_svg]:w-10 [&_svg]:h-10',
			'3xl': 'h-14 w-14 [&_svg]:w-12 [&_svg]:h-12',
			'4xl': 'h-16 w-16 [&_svg]:w-14 [&_svg]:h-14',
			base: 'h-6 w-6 [&_svg]:w-4 [&_svg]:h-4',
			lg: 'h-8 w-8 [&_svg]:w-6 [&_svg]:h-6',
			sm: 'h-5 w-5 [&_svg]:w-3 [&_svg]:h-3',
			unset: '',
			xl: 'h-10 w-10 [&_svg]:w-8 [&_svg]:h-8',
			xs: 'h-4 w-4 [&_svg]:w-2 [&_svg]:h-2',
		},
		intent: {
			danger: [
				'bg-danger-background-element text-danger-foreground',
				'dark:bg-danger-dark-background-element dark:text-danger-dark-foreground',
				'hover:bg-danger-background-hover active:bg-danger-background-active',
				'dark:hover:bg-danger-dark-background-hover dark:active:bg-danger-dark-background-active',
				'border-danger-border hover:border-danger-border-hover',
				'dark:border-danger-dark-border dark:hover:border-danger-dark-border-hover',
			],
			primary: [
				'bg-primary-background-element text-primary-foreground',
				'dark:bg-primary-dark-background-element dark:text-primary-dark-foreground',
				'hover:bg-primary-background-hover active:bg-primary-background-active',
				'dark:hover:bg-primary-dark-background-hover dark:active:bg-primary-dark-background-active',
				'border-primary-border hover:border-primary-border-hover',
				'dark:border-primary-dark-border dark:hover:border-primary-dark-border-hover',
			],
			secondary: [
				'bg-secondary-background-element text-secondary-foreground',
				'dark:bg-secondary-dark-background-element dark:text-secondary-dark-foreground',
				'hover:bg-secondary-background-hover active:bg-secondary-background-active',
				'dark:hover:bg-secondary-dark-background-hover dark:active:bg-secondary-dark-background-active',
				'border-secondary-border hover:border-secondary-border-hover',
				'dark:border-secondary-dark-border dark:hover:border-secondary-dark-border-hover',
			],
			success: [
				'bg-success-background-element text-success-foreground',
				'dark:bg-success-dark-background-element dark:text-success-dark-foreground',
				'hover:bg-success-background-hover active:bg-success-background-active',
				'dark:hover:bg-success-dark-background-hover dark:active:bg-success-dark-background-active',
				'border-success-border hover:border-success-border-hover',
				'dark:border-success-dark-border dark:hover:border-success-dark-border-hover',
			],
		},
		variant: {
			bright: '',
			transparent: 'bg-transparent',
		},
	},
});

export type CheckboxVariantsProperties = VariantProperties<typeof variants>;

export default variants;
