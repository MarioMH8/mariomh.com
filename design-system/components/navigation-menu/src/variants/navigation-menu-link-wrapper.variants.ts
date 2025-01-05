import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';

const variants = cva({
	base: 'w-full px-8 mb-4 flex lg:hidden justify-between items-center',
	compoundVariants: [],
	defaultVariants: {},
	variants: {},
});

type NavigationMenuLinkWrapperVariantsProperties = VariantProperties<typeof variants>;

export type { NavigationMenuLinkWrapperVariantsProperties };

export default variants;
