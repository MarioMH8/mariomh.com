import package_ from '@mariomh/link/package.json';
import component from '@mariomh/link/react';
import {
	align,
	asChild,
	children,
	dimensionFont,
	disabled,
	family,
	href,
	intent,
	noSelect,
	target,
	tracking,
	weight,
} from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	args: {
		children: 'Mi página web',
		href: 'https://mariomh.com',
		target: '_blank',
	},
	argTypes: {
		align,
		asChild,
		children,
		dimension: dimensionFont,
		disabled,
		family,
		href,
		intent: { ...intent, table: { category: 'Fuente', defaultValue: { summary: 'primary' } } },
		noSelect,
		target,
		tracking,
		weight,
	},
	component,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Enlace',
} as Meta<typeof component>;

export const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

export default meta;
