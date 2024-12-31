import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({
	base: 'inline-block underline-offset-4 hover:cursor-pointer hover:underline',
	defaultVariants: {
		intent: 'primary',
	},
	variants: {
		disabled: {
			true: 'opacity-50 hover:cursor-default hover:no-underline pointer-events-none',
		},
		intent: {
			danger: [
				'text-danger-foreground-highlight active:text-danger-foreground-muted',
				'dark:text-danger-dark-foreground-highlight dark:active:text-danger-dark-foreground-muted',
			],
			primary: [
				'text-primary-foreground-highlight active:text-primary-foreground-muted',
				'dark:text-primary-dark-foreground-highlight dark:active:text-primary-dark-foreground-muted',
			],
			secondary: [
				'text-secondary-foreground-highlight active:text-secondary-foreground-muted',
				'dark:text-secondary-dark-foreground-highlight dark:active:text-secondary-dark-foreground-muted',
			],
			success: [
				'text-success-foreground-highlight active:text-success-foreground-muted',
				'dark:text-success-dark-foreground-highlight dark:active:text-success-dark-foreground-muted',
			],
		},
	},
});

export type LinkVariantsProperties = Partial<Omit<FontVariantsProperties, 'intent' | 'variant'>> &
	VariantProperties<typeof variants>;

export default variants;
