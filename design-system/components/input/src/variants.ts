import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({
	base: [
		'flex',
		'w-full',
		'border',
		'file:border-0 file:bg-transparent file:text-sm file:font-medium',
		'disabled:cursor-not-allowed disabled:opacity-50',
	],
	compoundVariants: [
		{
			className: [
				'bg-primary-background-subtle dark:bg-primary-dark-background-subtle',
				'border-primary-border-subtle dark:border-primary-dark-border-subtle',
				'placeholder:text-primary-foreground-muted/35 dark:placeholder:text-primary-dark-foreground-muted/35',
			],
			variant: 'subtle',
			intent: 'primary',
		},
		{
			className: [
				'bg-secondary-background-subtle dark:bg-secondary-dark-background-subtle',
				'border-secondary-border-subtle dark:border-secondary-dark-border-subtle',
				'placeholder:text-secondary-foreground-muted/35 dark:placeholder:text-secondary-dark-foreground-muted/35',
			],
			variant: 'subtle',
			intent: 'secondary',
		},
		{
			className: [
				'bg-danger-background-subtle dark:bg-danger-dark-background-subtle',
				'border-danger-border-subtle dark:border-danger-dark-border-subtle',
				'placeholder:text-danger-foreground-muted/35 dark:placeholder:text-danger-dark-foreground-muted/35',
			],
			variant: 'subtle',
			intent: 'danger',
		},
		{
			className: [
				'bg-success-background-subtle dark:bg-success-dark-background-subtle',
				'border-success-border-subtle dark:border-success-dark-border-subtle',
				'placeholder:text-success-foreground-muted/35 dark:placeholder:text-success-dark-foreground-muted/35',
			],
			variant: 'subtle',
			intent: 'success',
		},
		{
			className: [
				'placeholder:text-primary-foreground-muted/35 dark:placeholder:text-primary-dark-foreground-muted/35',
			],
			variant: 'transparent',
			intent: 'primary',
		},
		{
			className: [
				'placeholder:text-secondary-foreground-muted/35 dark:placeholder:text-secondary-dark-foreground-muted/35',
			],
			variant: 'transparent',
			intent: 'secondary',
		},
		{
			className: [
				'placeholder:text-danger-foreground-muted/35 dark:placeholder:text-danger-dark-foreground-muted/35',
			],
			variant: 'transparent',
			intent: 'danger',
		},
		{
			className: [
				'placeholder:text-success-foreground-muted/35 dark:placeholder:text-success-dark-foreground-muted/35',
			],
			variant: 'transparent',
			intent: 'success',
		},
		{
			className:
				'h-4 checked:after:mt-[0.15rem] checked:after:ml-[0.3rem] checked:after:h-[0.5rem] checked:after:w-[0.275rem]',
			dimension: 'xs',
			type: 'checkbox',
		},
		{
			className:
				'h-5 checked:after:mt-[0.2rem] checked:after:ml-[0.4rem] checked:after:h-[0.6rem] checked:after:w-[0.275rem]',
			dimension: 'sm',
			type: 'checkbox',
		},
		{
			className:
				'h-6 checked:after:mt-[0.2rem] checked:after:ml-[0.5rem] checked:after:h-[0.8rem] checked:after:w-[0.375rem]',
			dimension: 'base',
			type: 'checkbox',
		},
		{
			className:
				'h-8 checked:after:mt-[0.3rem] checked:after:ml-[0.7rem] checked:after:h-[1rem] checked:after:w-[0.5rem]',
			dimension: 'lg',
			type: 'checkbox',
		},
		{
			className:
				'h-background0 checked:after:mt-[0.4rem] checked:after:ml-[0.9rem] checked:after:h-[1.2rem] checked:after:w-[0.625rem]',
			dimension: 'xl',
			type: 'checkbox',
		},
		{
			className:
				'h-background2 checked:after:mt-[0.5rem] checked:after:ml-[1rem] checked:after:h-[1.4rem] checked:after:w-[0.75rem]',
			dimension: '2xl',
			type: 'checkbox',
		},
		{
			className:
				'h-background4 checked:after:mt-[0.65rem] checked:after:ml-[1.15rem] checked:after:h-[1.6rem] checked:after:w-[0.875rem]',
			dimension: '3xl',
			type: 'checkbox',
		},
		{
			className:
				'h-background6 checked:after:mt-[0.8rem] checked:after:ml-[1.3rem] checked:after:h-[1.8rem] checked:after:w-[1rem]',
			dimension: '4xl',
			type: 'checkbox',
		},
		{
			className: [
				'hover:bg-primary-background-hover active:bg-primary-background-active',
				'dark:hover:bg-primary-dark-background-hover dark:active:bg-primary-dark-background-active',
				'hover:border-primary-border-hover dark:hover:border-primary-dark-border-hover',
			],
			type: 'checkbox',
			intent: 'primary',
		},
		{
			className: [
				'hover:bg-secondary-background-hover active:bg-secondary-background-active',
				'dark:hover:bg-secondary-dark-background-hover dark:active:bg-secondary-dark-background-active',
				'hover:border-secondary-border-hover dark:hover:border-secondary-dark-border-hover',
			],
			type: 'checkbox',
			intent: 'secondary',
		},
		{
			className: [
				'hover:bg-danger-background-hover active:bg-danger-background-active',
				'dark:hover:bg-danger-dark-background-hover dark:active:bg-danger-dark-background-active',
				'hover:border-danger-border-hover dark:hover:border-danger-dark-border-hover',
			],
			type: 'checkbox',
			intent: 'danger',
		},
		{
			className: [
				'hover:bg-success-background-hover active:bg-success-background-active',
				'dark:hover:bg-success-dark-background-hover dark:active:bg-success-dark-background-active',
				'hover:border-success-border-hover dark:hover:border-success-dark-border-hover',
			],
			type: 'checkbox',
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
			xs: 'px-2 py-background',
			sm: 'px-3 py-2',
			base: 'px-4 py-3',
			lg: 'px-5 py-4',
			xl: 'px-6 py-5',
			'2xl': 'px-7 py-6',
			'3xl': 'px-8 py-7',
			'4xl': 'px-9 py-8',
			'5xl': 'px-background0 py-9',
			'6xl': 'px-background1 py-background0',
		},
		type: {
			checkbox: [
				'p-0',
				'aspect-square appearance-none',
				`checked:after:content-[''] checked:after:absolute checked:after:block checked:after:rotate-45`,
				`checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white`,
				`checked:after:bg-transparent`,
			],
		},
		intent: {
			primary: [
				'border-primary-border dark:border-primary-dark-border',
				'text-primary-foreground dark:text-primary-dark-foreground',
				'bg-primary-background-element dark:bg-primary-dark-background-element',
				'placeholder:text-primary-foreground-muted/50 dark:placeholder:text-primary-dark-foreground-muted/50',
			],
			secondary: [
				'border-secondary-border dark:border-secondary-dark-border',
				'text-secondary-foreground dark:text-secondary-dark-foreground',
				'bg-secondary-background-element dark:bg-secondary-dark-background-element',
				'placeholder:text-secondary-foreground-muted/50 dark:placeholder:text-secondary-dark-foreground-muted/50',
			],
			success: [
				'border-success-border dark:border-success-dark-border',
				'text-success-foreground dark:text-success-dark-foreground',
				'bg-success-background-element dark:bg-success-dark-background-element',
				'placeholder:text-success-foreground-muted/50 dark:placeholder:text-success-dark-foreground-muted/50',
			],
			danger: [
				'border-danger-border dark:border-danger-dark-border',
				'text-danger-foreground dark:text-danger-dark-foreground',
				'bg-danger-background-element dark:bg-danger-dark-background-element',
				'placeholder:text-danger-foreground-muted/50 dark:placeholder:text-danger-dark-foreground-muted/50',
			],
		},
		variant: {
			subtle: '',
			transparent: 'bg-transparent dark:bg-transparent',
		},
	},
});

export type InputVariantsProperties = Partial<
	Pick<FontVariantsProperties, 'family' | 'noSelect' | 'tracking' | 'weight'>
> &
	VariantProperties<typeof variants>;

export default variants;
