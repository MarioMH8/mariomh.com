import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { RoundVariantsProperties } from '@mariomh/round/variants';
import type { ShadowVariantsProperties } from '@mariomh/shadow/variants';

const variants = cva({
	base: 'p-4',
	compoundVariants: [
		{
			className: 'bg-primary-2 dark:bg-primary-dark-2',
			subtle: true,
			transparent: false,
			variant: 'primary',
		},
		{
			className: 'bg-primary-2 dark:bg-primary-dark-2',
			subtle: true,
			transparent: undefined,
			variant: 'primary',
		},
		{
			bright: true,
			className: 'bg-primary dark:bg-primary-dark',
			transparent: false,
			variant: 'primary',
		},
		{
			bright: true,
			className: 'bg-primary dark:bg-primary-dark',
			transparent: undefined,
			variant: 'primary',
		},
		{
			bordered: true,
			className: 'border-primary-foreground dark:border-primary-dark-foreground',
			variant: 'primary',
		},
		{
			className: 'bg-secondary-background-subtle',
			subtle: true,
			transparent: false,
			variant: 'secondary',
		},
		{
			className: 'bg-secondary-background-subtle',
			subtle: true,
			transparent: undefined,
			variant: 'secondary',
		},
		{
			bordered: true,
			className: 'border-secondary-foreground dark:border-secondary',
			variant: 'secondary',
		},
	],
	defaultVariants: {
		variant: 'primary',
	},
	variants: {
		bordered: {
			true: 'border',
		},
		bright: {
			true: '',
		},
		subtle: {
			true: '',
		},
		transparent: {
			true: 'bg-transparent',
		},
		variant: {
			primary: ['bg-primary-background-element dark:bg-primary-dark-background-element', 'border-primary-border'],
			secondary: [
				'bg-secondary-background-element dark:bg-secondary-dark-background-element',
				'border-secondary-border',
			],
		},
	},
});

export type BoxVariantsProperties = VariantProperties<typeof variants> & {
	round?: RoundVariantsProperties['dimension'];
	shadow?: ShadowVariantsProperties['dimension'];
};

export default variants;
