import package_ from '@mariomh/box/package.json';
import Comp from '@mariomh/box/react';
import Span from '@mariomh/span/react';
import {
	asChild,
	bordered,
	bright,
	children,
	round,
	shadow,
	subtle,
	transparent,
	variant,
} from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * These stories showcase the box
 */
const meta = {
	args: {
		children: 'Adipisicing amet incididunt fugiat voluptate culpa qui duis id cillum.',
	},
	argTypes: {
		asChild,
		bordered,
		bright,
		children,
		round,
		shadow,
		subtle,
		transparent,
		variant,
	},
	Comp,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	render: ({ children, ...arguments_ }) => (
		<Comp
			{...arguments_}
			className='min-w-[400px] min-h-[300px]'>
			<Span>{children}</Span>
		</Comp>
	),
	tags: ['autodocs'],
	title: 'Átomos/Caja',
} as Meta<typeof Comp>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

const Bordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
	},
	name: 'Con bordes',
};

const Subtle: StoryObj<typeof meta> = {
	args: {
		subtle: true,
	},
	name: 'Sutil',
};

const Bright: StoryObj<typeof meta> = {
	args: {
		bright: true,
	},
	name: 'Vívido',
};

export { Default, Bright, Subtle, Bordered };

export default meta;
