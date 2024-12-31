import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({
	base: [
		'transition-colors',
		'inline-flex items-center justify-center',
		'disabled:pointer-events-none disabled:opacity-50',
	],
	compoundVariants: [
		{
			className: [
				'bg-primary text-primary-foreground',
				'dark:bg-primary dark:text-primary-foreground',
				'dark:hover:bg-primary-background-hover dark:active:bg-primary-background-active',
			],
			variant: 'bright',
			intent: 'primary',
		},
		{
			bordered: true,
			className: [
				'border-primary hover:border-primary-border-hover',
				'dark:border-primary-dark dark:hover:border-primary-dark-border-hover',
			],
			intent: 'primary',
		},
		{
			bordered: true,
			className: 'border-primary-foreground hover:border-primary-border-hover',
			intent: 'primary',
			variant: 'bright',
		},
		{
			className: 'bg-primary-background-subtle dark:bg-primary-dark-background-subtle',
			variant: 'subtle',
			intent: 'primary',
		},
		{
			className: [
				'text-primary hover:text-primary-foreground',
				'dark:text-primary dark:hover:text-primary-dark-foreground',
			],
			variant: 'transparent',
			intent: 'primary',
		},
		{
			className: [
				'bg-secondary text-secondary-foreground-invert',
				'hover:text-secondary-foreground active:text-secondary-foreground',
				'dark:bg-secondary dark:text-secondary-foreground',
				'dark:hover:bg-secondary-background-hover dark:active:bg-secondary-background-active',
			],
			variant: 'bright',
			intent: 'secondary',
		},
		{
			bordered: true,
			className: [
				'border-secondary hover:border-secondary-border-hover',
				'dark:border-secondary-dark dark:hover:border-secondary-dark-border-hover',
			],
			intent: 'secondary',
		},
		{
			bordered: true,
			className: 'border-secondary-foreground hover:border-secondary-border-hover',
			intent: 'secondary',
			variant: 'bright',
		},
		{
			className: 'bg-secondary-background-subtle dark:bg-secondary-dark-background-subtle',
			variant: 'subtle',
			intent: 'secondary',
		},
		{
			className: [
				'text-secondary hover:text-secondary-foreground',
				'dark:text-secondary dark:hover:text-secondary-dark-foreground',
			],
			variant: 'transparent',
			intent: 'secondary',
		},
		{
			className: [
				'bg-success text-success-foreground-invert',
				'hover:text-success-foreground active:text-success-foreground',
				'dark:bg-success dark:text-success-foreground',
				'dark:hover:bg-success-background-hover dark:active:bg-success-background-active',
			],
			variant: 'bright',
			intent: 'success',
		},
		{
			bordered: true,
			className: [
				'border-success hover:border-success-border-hover',
				'dark:border-success-dark dark:hover:border-success-dark-border-hover',
			],
			intent: 'success',
		},
		{
			bordered: true,
			className: 'border-success-foreground hover:border-success-border-hover',
			intent: 'success',
			variant: 'bright',
		},
		{
			className: 'bg-success-background-subtle dark:bg-success-dark-background-subtle',
			variant: 'subtle',
			intent: 'success',
		},
		{
			className: [
				'text-success hover:text-success-foreground',
				'dark:text-success dark:hover:text-success-dark-foreground',
			],
			variant: 'transparent',
			intent: 'success',
		},
		{
			className: [
				'bg-danger text-danger-foreground-invert',
				'hover:text-danger-foreground active:text-danger-foreground',
				'dark:bg-danger dark:text-danger-foreground-invert',
				'dark:hover:bg-danger-background-hover dark:active:bg-danger-background-active',
			],
			variant: 'bright',
			intent: 'danger',
		},
		{
			bordered: true,
			className: [
				'border-danger hover:border-danger-border-hover',
				'dark:border-danger-dark dark:hover:border-danger-dark-border-hover',
			],
			intent: 'danger',
		},
		{
			bordered: true,
			className: 'border-danger-foreground hover:border-danger-border-hover',
			intent: 'danger',
			variant: 'bright',
		},
		{
			className: 'bg-danger-background-subtle dark:bg-danger-dark-background-subtle',
			variant: 'subtle',
			intent: 'danger',
		},
		{
			className: [
				'text-danger hover:text-danger-foreground',
				'dark:text-danger dark:hover:text-danger-dark-foreground',
			],
			variant: 'transparent',
			intent: 'danger',
		},
		{
			className: 'px-2 py-1',
			icon: undefined,
			dimension: 'xs',
		},
		{
			className: 'px-3 py-2',
			icon: undefined,
			dimension: 'sm',
		},
		{
			className: 'px-4 py-3',
			icon: undefined,
			dimension: 'base',
		},
		{
			className: 'px-5 py-4',
			icon: undefined,
			dimension: 'lg',
		},
		{
			className: 'px-6 py-5',
			icon: undefined,
			dimension: 'xl',
		},
		{
			className: 'px-7 py-6',
			icon: undefined,
			dimension: '2xl',
		},
		{
			className: 'px-8 py-7',
			icon: undefined,
			dimension: '3xl',
		},
		{
			className: 'px-9 py-8',
			icon: undefined,
			dimension: '4xl',
		},
		{
			className: 'h-8',
			icon: true,
			dimension: 'xs',
		},
		{
			className: 'h-10',
			icon: true,
			dimension: 'sm',
		},
		{
			className: 'h-14',
			icon: true,
			dimension: 'base',
		},
		{
			className: 'h-20',
			icon: true,
			dimension: 'lg',
		},
		{
			className: 'h-28',
			icon: true,
			dimension: 'xl',
		},
		{
			className: 'h-36',
			icon: true,
			dimension: '2xl',
		},
		{
			className: 'h-44',
			icon: true,
			dimension: '3xl',
		},
		{
			className: 'h-52',
			icon: true,
			dimension: '4xl',
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
		icon: {
			true: 'aspect-square',
		},
		dimension: {
			'2xl': '',
			'3xl': '',
			'4xl': '',
			base: '',
			lg: '',
			sm: '',
			unset: '',
			xl: '',
			xs: '',
		},
		intent: {
			primary: [
				'bg-primary-background-element text-primary-foreground',
				'dark:bg-primary-dark-background-element dark:text-primary-dark-foreground',
				'hover:bg-primary-background-hover active:bg-primary-background-active',
				'dark:hover:bg-primary-dark-background-hover dark:active:bg-primary-dark-background-active',
				'selection:bg-primary-background-active',
				'dark:selection:bg-primary-dark-background-active dark:selection:text-primary-foreground-invert',
			],
			danger: [
				'bg-danger-background-element text-danger-foreground',
				'dark:bg-danger-dark-background-element dark:text-danger-dark-foreground',
				'hover:bg-danger-background-hover active:bg-danger-background-active',
				'dark:hover:bg-danger-dark-background-hover dark:active:bg-danger-dark-background-active',
				'selection:bg-danger-background-active',
				'dark:selection:bg-danger-dark-background-active dark:selection:text-danger-foreground-invert',
			],
			secondary: [
				'bg-secondary-background-element text-secondary-foreground',
				'dark:bg-secondary-dark-background-element dark:text-secondary-dark-foreground',
				'hover:bg-secondary-background-hover active:bg-secondary-background-active',
				'dark:hover:bg-secondary-dark-background-hover dark:active:bg-secondary-dark-background-active',
				'selection:bg-secondary-background-active',
				'dark:selection:bg-secondary-dark-background-active dark:selection:text-secondary-foreground-invert',
			],
			success: [
				'bg-success-background-element text-success-foreground',
				'dark:bg-success-dark-background-element dark:text-success-dark-foreground',
				'hover:bg-success-background-hover active:bg-success-background-active',
				'dark:hover:bg-success-dark-background-hover dark:active:bg-success-dark-background-active',
				'selection:bg-success-background-active',
				'dark:selection:bg-success-dark-background-active dark:selection:text-success-foreground-invert',
			],
		},
		variant: {
			bright: '',
			link: '',
			subtle: '',
			transparent: 'bg-transparent dark:bg-transparent',
		},
	},
});

export type ButtonVariantsProperties = Partial<
	Pick<FontVariantsProperties, 'family' | 'noSelect' | 'tracking' | 'weight'>
> &
	VariantProperties<typeof variants>;

export default variants;
