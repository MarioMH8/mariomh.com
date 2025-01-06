import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';

const variantsTabs = cva({
	base: 'flex',
	compoundVariants: [],
	defaultVariants: {
		orientation: 'horizontal',
	},
	variants: {
		orientation: {
			horizontal: 'flex-col',
			vertical: 'flex-row',
		},
	},
});

type TabsVariantsProperties = VariantProperties<typeof variantsTabs>;

const variantsTabsList = cva({
	base: 'shrink-0 flex data-[orientation=horizontal]:border-b data-[orientation=vertical]:flex-col',
	compoundVariants: [],
	defaultVariants: {},
	variants: {},
});

type TabsListVariantsProperties = VariantProperties<typeof variantsTabsList>;

const variantsTabsTrigger = cva({
	base: [
		'h-12 px-5',
		'text-sm leading-none text-secondary-foreground dark:text-secondary-dark-foreground select-none',
		'flex items-center justify-center',
		'outline-none cursor-default',
		'hover:text-primary-foreground-muted data-[state=active]:text-primary-foreground-muted',
		'dark:hover:text-primary-dark-foreground-muted data-[state=active]:dark:text-primary-dark-foreground-muted',
		'data-[state=active]:shadow-primary-foreground-muted',
		'data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px]',
		'data-[state=active]:focus:shadow-primary-foreground-muted data-[state=active]:dark:focus:shadow-primary',
		'data-[orientation=horizontal]:flex-1 data-[orientation=horizontal]:data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]',
		'data-[orientation=vertical]:data-[state=inactive]:border-r data-[orientation=vertical]:data-[state=active]:shadow-[inset_-1px_0_0_0,1px_0_0_0]',
	],
	compoundVariants: [],
	defaultVariants: {},
	variants: {},
});

type TabsTriggerVariantsProperties = VariantProperties<typeof variantsTabsTrigger>;

const variantsTabsContent = cva({
	base: 'grow p-5 rounded-b-md outline-none',
	compoundVariants: [],
	defaultVariants: {},
	variants: {},
});

type TabsContentVariantsProperties = VariantProperties<typeof variantsTabsContent>;

export { variantsTabs, variantsTabsContent, variantsTabsList, variantsTabsTrigger };

export type {
	TabsContentVariantsProperties,
	TabsListVariantsProperties,
	TabsTriggerVariantsProperties,
	TabsVariantsProperties,
};
