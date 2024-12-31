import package_ from '@mariomh/box/package.json';
import Comp from '@mariomh/box/react';
import { asChild, bordered, children, intentBox, round, shadow, variantBox } from '@mariomh/storybook/argument-types';
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
		children,
		intent: intentBox,
		round,
		shadow,
		variant: variantBox,
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
			{children}
		</Comp>
	),
	tags: ['autodocs'],
	title: 'Átomos/Caja',
} as Meta<typeof Comp>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

const Bright: StoryObj<typeof meta> = {
	args: {
		variant: 'bright',
	},
	name: 'Vívido',
};

const Subtle: StoryObj<typeof meta> = {
	args: {
		variant: 'subtle',
	},
	name: 'Sutil',
};

const Transparent: StoryObj<typeof meta> = {
	args: {
		variant: 'transparent',
	},
	name: 'Transparente',
};

const Bordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
	},
	name: 'Con bordes',
};

const BrightBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		variant: 'bright',
	},
	name: 'Vívido con bordes',
};

const SubtleBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		variant: 'subtle',
	},
	name: 'Sutil con bordes',
};

const TransparentBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		variant: 'transparent',
	},
	name: 'Transparente con bordes',
};

const Secondary: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
	},
	name: 'Secundario',
};

const SecondaryBright: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
		variant: 'bright',
	},
	name: 'Secundario vívido',
};

const SecondarySubtle: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
		variant: 'subtle',
	},
	name: 'Secundario sutil',
};

const SecondaryTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
		variant: 'transparent',
	},
	name: 'Secundario transparente',
};

const SecondaryBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'secondary',
	},
	name: 'Secundario con bordes',
};

const SecondaryBrightBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'secondary',
		variant: 'bright',
	},
	name: 'Secundario vívido con bordes',
};

const SecondarySubtleBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'secondary',
		variant: 'subtle',
	},
	name: 'Secundario sutil con bordes',
};

const SecondaryTransparentBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'secondary',
		variant: 'transparent',
	},
	name: 'Secundario transparente con bordes',
};

export {
	Default,
	Bright,
	Subtle,
	Transparent,
	Bordered,
	BrightBordered,
	SubtleBordered,
	TransparentBordered,
	Secondary,
	SecondaryBright,
	SecondarySubtle,
	SecondaryTransparent,
	SecondaryBordered,
	SecondaryBrightBordered,
	SecondarySubtleBordered,
	SecondaryTransparentBordered,
};

export default meta;
