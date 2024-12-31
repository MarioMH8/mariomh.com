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
			className: ['bg-primary-1 dark:bg-primary-dark-1 border-primary-border dark:border-primary-border'],
			variant: 'subtle',
			intent: 'primary',
		},
		{
			className: 'bg-secondary-1 dark:bg-secondary-dark-1 border-secondary-border dark:border-secondary-border',
			variant: 'subtle',
			intent: 'secondary',
		},
		{
			className: 'bg-success-1 dark:bg-success-dark-1 border-success-border dark:border-success-border',
			variant: 'subtle',
			intent: 'success',
		},
		{
			className: 'bg-danger-1 dark:bg-danger-dark-1 border-danger-border dark:border-danger-border',
			variant: 'subtle',
			intent: 'danger',
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
				'h-10 checked:after:mt-[0.4rem] checked:after:ml-[0.9rem] checked:after:h-[1.2rem] checked:after:w-[0.625rem]',
			dimension: 'xl',
			type: 'checkbox',
		},
		{
			className:
				'h-12 checked:after:mt-[0.5rem] checked:after:ml-[1rem] checked:after:h-[1.4rem] checked:after:w-[0.75rem]',
			dimension: '2xl',
			type: 'checkbox',
		},
		{
			className:
				'h-14 checked:after:mt-[0.65rem] checked:after:ml-[1.15rem] checked:after:h-[1.6rem] checked:after:w-[0.875rem]',
			dimension: '3xl',
			type: 'checkbox',
		},
		{
			className:
				'h-16 checked:after:mt-[0.8rem] checked:after:ml-[1.3rem] checked:after:h-[1.8rem] checked:after:w-[1rem]',
			dimension: '4xl',
			type: 'checkbox',
		},
	],
	defaultVariants: {
		dimension: 'base',
		intent: 'primary',
	},
	variants: {
		dimension: {
			'2xl': 'px-7 py-6',
			'3xl': 'px-8 py-7',
			'4xl': 'px-9 py-8',
			base: 'px-4 py-3',
			lg: 'px-5 py-4',
			sm: 'px-3 py-2',
			unset: '',
			xl: 'px-6 py-5',
			xs: 'px-2 py-1',
		},
		type: {
			checkbox: [
				'p-0',
				'aspect-square appearance-none',
				'hover:cursor-pointer',
				`checked:border-primary checked:bg-primary`,
				`checked:after:content-[''] checked:after:absolute checked:after:block checked:after:rotate-45`,
				`checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white`,
				`checked:after:bg-transparent`,
			],
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

export type InputVariantsProperties = Partial<
	Pick<FontVariantsProperties, 'family' | 'noSelect' | 'tracking' | 'weight'>
> &
	VariantProperties<typeof variants>;

export default variants;
