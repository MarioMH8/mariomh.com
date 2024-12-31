import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { RoundVariantsProperties } from '@mariomh/round/variants';
import type { ShadowVariantsProperties } from '@mariomh/shadow/variants';

const variants = cva({
	base: 'p-4',
	compoundVariants: [
		{
			className: 'bg-primary dark:bg-primary-dark dark:text-secondary-dark-foreground-invert',
			intent: 'primary',
			variant: 'bright',
		},
		{
			className: 'bg-primary-2 dark:bg-primary-dark-2',
			intent: 'primary',
			variant: 'subtle',
		},
		{
			bordered: true,
			className: 'border-primary-foreground dark:border-primary-dark-foreground',
			intent: 'primary',
			variant: 'bright',
		},
		{
			bordered: true,
			className: 'border-primary dark:border-primary-dark-foreground',
			intent: 'primary',
			variant: 'transparent',
		},
		{
			className: [
				'bg-secondary dark:bg-secondary-dark',
				'text-secondary-foreground-invert dark:text-secondary-dark-foreground-invert',
			],
			intent: 'secondary',
			variant: 'bright',
		},
		{
			className: 'bg-secondary-background-subtle dark:bg-secondary-dark-background-subtle',
			intent: 'secondary',
			variant: 'subtle',
		},
	],
	defaultVariants: {
		intent: 'primary',
	},
	variants: {
		bordered: {
			true: 'border',
		},
		intent: {
			primary: [
				'bg-primary-background-element dark:bg-primary-dark-background-element',
				'border-primary dark:border-primary-dark',
			],
			secondary: [
				'bg-secondary-background-element dark:bg-secondary-dark-background-element',
				'border-secondary dark:border-secondary-dark',
			],
		},
		variant: {
			bright: '',
			subtle: '',
			transparent: 'bg-transparent dark:bg-transparent',
		},
	},
});

export type BoxVariantsProperties = VariantProperties<typeof variants> & {
	round?: RoundVariantsProperties['dimension'];
	shadow?: ShadowVariantsProperties['dimension'];
};

export default variants;
