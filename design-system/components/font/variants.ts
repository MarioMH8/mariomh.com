import type { VariantProperties } from '@mariomh/desing-system/cva';
import cva from '@mariomh/desing-system/cva';

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
			bright: undefined,
			className: 'text-primary-foreground-muted/65 dark:text-primary-dark-foreground-muted/65',
			muted: true,
			variant: 'primary',
		},
		{
			bright: true,
			className: 'text-primary dark:text-primary',
			muted: undefined,
			variant: 'primary',
		},
		{
			bright: undefined,
			className: 'text-secondary-foreground-muted/65 dark:text-secondary-dark-foreground-muted/65',
			muted: true,
			variant: 'secondary',
		},
		{
			bright: true,
			className: 'text-secondary dark:text-secondary',
			muted: undefined,
			variant: 'secondary',
		},
		{
			bright: undefined,
			className: 'text-success-foreground-muted/65 dark:text-success-dark-foreground-muted/65',
			muted: true,
			variant: 'success',
		},
		{
			bright: true,
			className: 'text-success dark:text-success',
			muted: undefined,
			variant: 'success',
		},
		{
			bright: undefined,
			className: 'text-danger-foreground-muted/65 dark:text-danger-dark-foreground-muted/65',
			muted: true,
			variant: 'danger',
		},
		{
			bright: true,
			className: 'text-danger dark:text-danger',
			muted: undefined,
			variant: 'danger',
		},
	],
	defaultVariants: {
		dimension: 'base',
		family: 'primary',
		tracking: 'base',
		variant: 'secondary',
		weight: 'base',
	},
	variants: {
		// Opcional
		align: {
			center: 'text-center',
			end: 'text-right',
			start: 'text-left',
		},
		bright: {
			true: '',
		},
		// Obligatoria
		dimension: {
			'2xl': 'text-2xl',
			'3xl': 'text-3xl',
			'4xl': 'text-4xl',
			base: 'text-base',
			huge: 'text-7xl leading-[130%]',
			lg: 'text-lg',
			sm: 'text-sm',
			unset: '',
			xl: 'text-xl',
			xs: 'text-xs',
		},
		// Obligatoria
		family: {
			primary: 'font-primary',
			secondary: 'font-secondary',
		},
		muted: {
			true: '',
		},
		// Opcional
		noSelect: {
			true: 'select-none',
		},
		// Obligatoria
		tracking: {
			base: '',
			lg: '',
			sm: '',
		},
		// Obligatoria
		variant: {
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
		// Obligatoria
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
