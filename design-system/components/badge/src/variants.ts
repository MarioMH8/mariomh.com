import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';
import type { ShadowVariantsProperties } from '@mariomh/shadow/variants';

const variants = cva({
	base: 'py-1 px-2 inline-block',
	compoundVariants: [],
	defaultVariants: {
		intent: 'secondary',
	},
	variants: {
		bordered: {
			true: 'border',
		},
		intent: {
			danger: [
				'bg-danger-background-subtle border-danger-border',
				'dark:bg-danger-dark-background-subtle dark:border-danger-dark-border',
			],
			primary: [
				'bg-primary-background-subtle border-primary-border',
				'dark:bg-primary-dark-background-subtle dark:border-primary-dark-border',
			],
			secondary: [
				'bg-secondary-background-subtle border-secondary-border',
				'dark:bg-secondary-dark-background-subtle dark:border-secondary-dark-border',
			],
			success: [
				'bg-success-background-subtle border-success-border',
				'dark:bg-success-dark-background-subtle dark:border-success-dark-border',
			],
		},
		variant: {
			transparent: 'bg-transparent dark:bg-transparent',
		},
	},
});

export type BadgeVariantsProperties = Partial<Omit<FontVariantsProperties, 'align' | 'intent' | 'variant'>> &
	VariantProperties<typeof variants> & {
		shadow?: ShadowVariantsProperties['dimension'];
	};

export default variants;
