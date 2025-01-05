import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';

const variants = cva({
	base: [
		'dark:text-primary-dark-foreground text-primary-foreground',
		'py-4 px-6',
		'border-b-2 border-b-transparent',
		'focus-visible:outline-none hover:cursor-pointer',
		'focus-visible:border-b-secondary-4 dark:focus-visible:border-b-primary-dark-background-subtle',
		'hover:border-b-secondary-4 dark:hover:border-b-primary-dark-background-subtle',
		'max-lg:text-xl',
		'whitespace-nowrap',
	],
	compoundVariants: [],
	defaultVariants: {
		active: false,
	},
	variants: {
		active: {
			true: [
				'border-b-primary-foreground dark:border-b-primary-dark-foreground',
				'hover:border-b-primary-foreground/40 dark:hover:border-b-primary-dark-foreground/40',
				'focus-visible:border-b-primary-foreground/40 dark:focus-visible:border-b-primary-dark-foreground/40',
			],
		},
	},
});

type NavigationMenuLinkVariantsProperties = VariantProperties<typeof variants>;

export type { NavigationMenuLinkVariantsProperties };

export default variants;
