import package_ from '@mariomh/badge/package.json';
import component from '@mariomh/badge/react';
import {
	asChild,
	bordered,
	children,
	dimensionFont,
	family,
	intent,
	noSelect,
	shadow,
	tracking,
	variantBadge,
	weight,
} from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	args: {
		children: 'exercitation',
	},
	argTypes: {
		asChild,
		bordered,
		children,
		dimension: dimensionFont,
		family,
		intent: {
			...intent,
			description: 'Color de la insignia',
			table: { category: 'Fuente', defaultValue: { summary: 'primary' } },
		},
		noSelect,
		shadow,
		tracking,
		variant: variantBadge,
		weight,
	},
	component,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Insignia',
} as Meta<typeof component>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

const DefaultBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
	},
	name: 'Por defecto (Con bordes)',
};

const DefaultShadow: StoryObj<typeof meta> = {
	args: {
		shadow: 'md',
	},
	name: 'Por defecto (Con sombra)',
};

const DefaultTransparent: StoryObj<typeof meta> = {
	args: {
		variant: 'transparent',
	},
	name: 'Por defecto (Transparente)',
};

const DefaultBorderedTransparent: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		variant: 'transparent',
	},
	name: 'Por defecto (Con bordes y transparente)',
};

const Primary: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
	},
	name: 'Primario',
};

const PrimaryBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'primary',
	},
	name: 'Primario (Con bordes)',
};

const PrimaryShadow: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
		shadow: 'md',
	},
	name: 'Primario (Con sombra)',
};

const PrimaryTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
		variant: 'transparent',
	},
	name: 'Primario (Transparente)',
};

const PrimaryBorderedTransparent: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'primary',
		variant: 'transparent',
	},
	name: 'Primario (Con bordes y transparente)',
};

const Secondary: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
	},
	name: 'Primario',
};

const SecondaryBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'secondary',
	},
	name: 'Primario (Con bordes)',
};

const SecondaryShadow: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
		shadow: 'md',
	},
	name: 'Primario (Con sombra)',
};

const SecondaryTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
		variant: 'transparent',
	},
	name: 'Primario (Transparente)',
};

const SecondaryBorderedTransparent: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'secondary',
		variant: 'transparent',
	},
	name: 'Primario (Con bordes y transparente)',
};

const Success: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
	},
	name: 'Primario',
};

const SuccessBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'success',
	},
	name: 'Primario (Con bordes)',
};

const SuccessShadow: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
		shadow: 'md',
	},
	name: 'Primario (Con sombra)',
};

const SuccessTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
		variant: 'transparent',
	},
	name: 'Primario (Transparente)',
};

const SuccessBorderedTransparent: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'success',
		variant: 'transparent',
	},
	name: 'Primario (Con bordes y transparente)',
};

const Danger: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
	},
	name: 'Primario',
};

const DangerBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'danger',
	},
	name: 'Primario (Con bordes)',
};

const DangerShadow: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
		shadow: 'md',
	},
	name: 'Primario (Con sombra)',
};

const DangerTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
		variant: 'transparent',
	},
	name: 'Primario (Transparente)',
};

const DangerBorderedTransparent: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'danger',
		variant: 'transparent',
	},
	name: 'Primario (Con bordes y transparente)',
};

export {
	Default,
	DefaultBordered,
	DefaultShadow,
	DefaultTransparent,
	DefaultBorderedTransparent,
	Primary,
	PrimaryBordered,
	PrimaryShadow,
	PrimaryTransparent,
	PrimaryBorderedTransparent,
	Secondary,
	SecondaryBordered,
	SecondaryShadow,
	SecondaryTransparent,
	SecondaryBorderedTransparent,
	Success,
	SuccessBordered,
	SuccessShadow,
	SuccessTransparent,
	SuccessBorderedTransparent,
	Danger,
	DangerBordered,
	DangerShadow,
	DangerTransparent,
	DangerBorderedTransparent,
};

export default meta;
