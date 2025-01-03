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
			className: 'tracking-wide',
			family: 'secondary',
			tracking: 'sm',
		},
		{
			className: 'tracking-wider',
			family: 'secondary',
			tracking: 'base',
		},
		{
			className: 'tracking-widest',
			family: 'secondary',
			tracking: 'lg',
		},
		{
			className: 'text-primary-foreground-muted/45 dark:text-primary-dark-foreground-muted/45',
			variant: 'muted',
			intent: 'primary',
		},
		{
			className: 'text-primary dark:text-primary',
			variant: 'bright',
			intent: 'primary',
		},
		{
			className: 'text-secondary-foreground-muted/45 dark:text-secondary-dark-foreground-muted/45',
			variant: 'muted',
			intent: 'secondary',
		},
		{
			className: 'text-secondary dark:text-secondary',
			variant: 'bright',
			intent: 'secondary',
		},
		{
			className: 'text-success-foreground-muted/45 dark:text-success-dark-foreground-muted/45',
			variant: 'muted',
			intent: 'success',
		},
		{
			className: 'text-success dark:text-success',
			variant: 'bright',
			intent: 'success',
		},
		{
			className: 'text-danger-foreground-muted/45 dark:text-danger-dark-foreground-muted/45',
			variant: 'muted',
			intent: 'danger',
		},
		{
			className: 'text-danger dark:text-danger',
			variant: 'bright',
			intent: 'danger',
		},
	],
	defaultVariants: {
		dimension: 'base',
		family: 'primary',
		intent: 'secondary',
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
			huge: 'text-7xl',
		},
		family: {
			primary: 'font-primary',
			secondary: 'font-secondary',
		},
		intent: {
			danger: [
				'text-danger-foreground selection:bg-danger-background-active',
				'dark:text-danger-dark-foreground dark:selection:bg-danger-dark-background-active dark:selection:text-danger-foreground-invert',
			],
			primary: [
				'text-primary-foreground selection:bg-primary-background-active',
				'dark:text-primary-dark-foreground dark:selection:bg-primary-dark-background-active dark:selection:text-primary-foreground-invert',
			],
			secondary: [
				'text-secondary-foreground selection:bg-secondary-background-active',
				'dark:text-secondary-dark-foreground dark:selection:bg-secondary-dark-background-active dark:selection:text-secondary-foreground-invert',
			],
			success: [
				'text-success-foreground selection:bg-success-background-active',
				'dark:text-success-dark-foreground dark:selection:bg-success-dark-background-active dark:selection:text-success-foreground-invert',
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
