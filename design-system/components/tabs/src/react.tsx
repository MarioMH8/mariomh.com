import type {
	TabsContentProps as RadixTabsContentProperties,
	TabsListProps as RadixTabsListProperties,
	TabsTriggerProps as RadixTabsTriggerProperties,
} from '@radix-ui/react-tabs';
import {
	Tabs as RadixTabs,
	TabsContent as RadixTabsContent,
	TabsList as RadixTabsList,
	TabsTrigger as RadixTabsTrigger,
} from '@radix-ui/react-tabs';
import type { ComponentPropsWithRef, FC } from 'react';
import { forwardRef } from 'react';

import { propertiesTabs, propertiesTabsContent, propertiesTabsList, propertiesTabsTrigger } from './properties';
import type {
	TabsContentVariantsProperties,
	TabsListVariantsProperties,
	TabsTriggerVariantsProperties,
	TabsVariantsProperties,
} from './variants';

interface ReactTabsProperties
	extends ComponentPropsWithRef<typeof RadixTabs>,
		Omit<TabsVariantsProperties, 'orientation'> {}

const Tabs: FC<ReactTabsProperties> = ({ ref, ...p }) => (
	<RadixTabs
		{...propertiesTabs(p)}
		orientation={p.orientation}
		ref={ref}
	/>
);

Tabs.displayName = 'Tabs';

interface ReactTabsListProperties extends RadixTabsListProperties, TabsListVariantsProperties {}

const TabsList = forwardRef<HTMLDivElement, ReactTabsListProperties>((p, reference) => (
	<RadixTabsList
		{...propertiesTabsList(p)}
		ref={reference}
	/>
));

TabsList.displayName = 'TabsList';

interface ReactTabsTriggerProperties extends RadixTabsTriggerProperties, TabsTriggerVariantsProperties {}

const TabsTrigger = forwardRef<HTMLButtonElement, ReactTabsTriggerProperties>((p, reference) => (
	<RadixTabsTrigger
		{...propertiesTabsTrigger(p)}
		ref={reference}
	/>
));

TabsTrigger.displayName = 'TabsTrigger';

interface ReactTabsContentProperties extends RadixTabsContentProperties, TabsContentVariantsProperties {}

const TabsContent = forwardRef<HTMLDivElement, ReactTabsContentProperties>((p, reference) => (
	<RadixTabsContent
		{...propertiesTabsContent(p)}
		ref={reference}
	/>
));

TabsContent.displayName = 'TabsContent';

export { Tabs, TabsContent, TabsList, TabsTrigger };

export type { ReactTabsContentProperties, ReactTabsListProperties, ReactTabsProperties, ReactTabsTriggerProperties };
