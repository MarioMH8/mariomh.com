import type { VariantProperties } from '@mariomh/desgin-system/cva';
import cva from '@mariomh/desgin-system/cva';

const variants = cva({
	base: [
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
		'ring-offset-primary-background dark:ring-offset-primary-dark-background',
	],
	defaultVariants: {
		variant: 'primary',
	},
	variants: {
		variant: {
			danger: 'focus-visible:ring-danger-border',
			primary: 'focus-visible:ring-primary-border',
			secondary: 'focus-visible:ring-secondary-border',
			success: 'focus-visible:ring-success-border',
		},
	},
});

export type FocusVariantsProperties = VariantProperties<typeof variants>;

export default variants;
