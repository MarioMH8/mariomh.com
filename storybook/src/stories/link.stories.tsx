import package_ from '@mariomh/link/package.json';
import component from '@mariomh/link/react';
import {
	align,
	asChild,
	children,
	dimension,
	disabled,
	family,
	href,
	noSelect,
	target,
	tracking,
	variant,
	weight,
} from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	args: {
		children: 'Mi página web',
		disabled: false,
		href: 'https://mariomh.com',
		target: '_blank',
	},
	argTypes: {
		align,
		asChild,
		children,
		dimension,
		disabled,
		family,
		href,
		noSelect,
		target,
		tracking,
		variant: {
			...variant,
			table: { category: 'Fuente', defaultValue: { summary: 'primary' } },
		},

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
