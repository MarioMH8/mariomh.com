import { merge } from '@mariomh/cva';

import type {
	TabsContentVariantsProperties,
	TabsListVariantsProperties,
	TabsTriggerVariantsProperties,
	TabsVariantsProperties,
} from './variants';
import { variantsTabs, variantsTabsContent, variantsTabsList, variantsTabsTrigger } from './variants';

function cnTabs(properties: TabsVariantsProperties = {}, ...classLists: Parameters<typeof merge>): string {
	return merge(variantsTabs(properties), ...classLists);
}

function cnTabsList(properties: TabsListVariantsProperties = {}, ...classLists: Parameters<typeof merge>): string {
	return merge(variantsTabsList(properties), ...classLists);
}

function cnTabsTrigger(
	properties: TabsTriggerVariantsProperties = {},
	...classLists: Parameters<typeof merge>
): string {
	return merge(variantsTabsTrigger(properties), ...classLists);
}

function cnTabsContent(
	properties: TabsContentVariantsProperties = {},
	...classLists: Parameters<typeof merge>
): string {
	return merge(variantsTabsContent(properties), ...classLists);
}

export { cnTabs, cnTabsContent, cnTabsList, cnTabsTrigger };
