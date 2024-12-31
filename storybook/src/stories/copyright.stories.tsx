import package_ from '@mariomh/copyright/package.json';
import component from '@mariomh/copyright/react';
import {
	align,
	asChild,
	children,
	family,
	from,
	intentFont,
	noSelect,
	to,
	tracking,
	variantFont,
	weight,
} from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	argTypes: {
		align,
		asChild,
		children,
		family,
		from,
		intent: intentFont,
		noSelect,
		to,
		tracking,
		variant: variantFont,
		weight,
	},
	component,
	parameters: {
		category: 'Molécula',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Moléculas/Copyright',
} as Meta<typeof component>;

export const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

export default meta;
