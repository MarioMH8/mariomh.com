import { cnTabs, cnTabsContent, cnTabsList, cnTabsTrigger } from './class-name';
import type {
	ReactTabsContentProperties,
	ReactTabsListProperties,
	ReactTabsProperties,
	ReactTabsTriggerProperties,
} from './react';
import type {
	TabsContentVariantsProperties,
	TabsListVariantsProperties,
	TabsTriggerVariantsProperties,
	TabsVariantsProperties,
} from './variants';

function propertiesTabs<T extends ReactTabsProperties>(p?: T & TabsVariantsProperties): T {
	if (!p) {
		return {
			className: cnTabs(p),
		} as T;
	}

	const { className: cls1, ...rest } = p as ReactTabsProperties;

	return {
		...rest,
		className: cnTabs(p satisfies T, cls1),
	} as T;
}

function propertiesTabsList<T extends ReactTabsListProperties>(p?: T & TabsListVariantsProperties): T {
	if (!p) {
		return {
			className: cnTabsList(p),
		} as T;
	}

	const { className: cls1, ...rest } = p as ReactTabsProperties;

	return {
		...rest,
		className: cnTabsList(p satisfies T, cls1),
	} as T;
}

function propertiesTabsTrigger<T extends ReactTabsTriggerProperties>(p?: T & TabsTriggerVariantsProperties): T {
	if (!p) {
		return {
			className: cnTabsTrigger(p),
		} as T;
	}

	const { className: cls1, ...rest } = p as ReactTabsProperties;

	return {
		...rest,
		className: cnTabsTrigger(p satisfies T, cls1),
	} as T;
}

function propertiesTabsContent<T extends ReactTabsContentProperties>(p?: T & TabsContentVariantsProperties): T {
	if (!p) {
		return {
			className: cnTabsContent(p),
		} as T;
	}

	const { className: cls1, ...rest } = p as ReactTabsProperties;

	return {
		...rest,
		className: cnTabsContent(p satisfies T, cls1),
	} as T;
}

export { propertiesTabs, propertiesTabsContent, propertiesTabsList, propertiesTabsTrigger };
