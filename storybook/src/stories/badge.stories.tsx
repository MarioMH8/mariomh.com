import package_ from '@mariomh/badge/package.json';
import component from '@mariomh/badge/react';
import {
	asChild,
	bordered,
	children,
	dimension,
	family,
	noSelect,
	shadow,
	tracking,
	transparent,
	variant,
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
		dimension,
		family,
		noSelect,
		shadow,
		tracking,
		transparent,
		variant,
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
		transparent: true,
	},
	name: 'Por defecto (Transparente)',
};

const DefaultBorderedTransparent: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		transparent: true,
	},
	name: 'Por defecto (Con bordes y transparente)',
};

const Primary: StoryObj<typeof meta> = {
	args: {
		variant: 'primary',
	},
	name: 'Primario',
};

const PrimaryBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		variant: 'primary',
	},
	name: 'Primario (Con bordes)',
};

const PrimaryShadow: StoryObj<typeof meta> = {
	args: {
		shadow: 'md',
		variant: 'primary',
	},
	name: 'Primario (Con sombra)',
};

const PrimaryTransparent: StoryObj<typeof meta> = {
	args: {
		transparent: true,
		variant: 'primary',
	},
	name: 'Primario (Transparente)',
};

const PrimaryBorderedTransparent: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		transparent: true,
		variant: 'primary',
	},
	name: 'Primario (Con bordes y transparente)',
};

const Secondary: StoryObj<typeof meta> = {
	args: {
		variant: 'secondary',
	},
	name: 'Primario',
};

const SecondaryBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		variant: 'secondary',
	},
	name: 'Primario (Con bordes)',
};

const SecondaryShadow: StoryObj<typeof meta> = {
	args: {
		shadow: 'md',
		variant: 'secondary',
	},
	name: 'Primario (Con sombra)',
};

const SecondaryTransparent: StoryObj<typeof meta> = {
	args: {
		transparent: true,
		variant: 'secondary',
	},
	name: 'Primario (Transparente)',
};

const SecondaryBorderedTransparent: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		transparent: true,
		variant: 'secondary',
	},
	name: 'Primario (Con bordes y transparente)',
};

const Success: StoryObj<typeof meta> = {
	args: {
		variant: 'success',
	},
	name: 'Primario',
};

const SuccessBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		variant: 'success',
	},
	name: 'Primario (Con bordes)',
};

const SuccessShadow: StoryObj<typeof meta> = {
	args: {
		shadow: 'md',
		variant: 'success',
	},
	name: 'Primario (Con sombra)',
};

const SuccessTransparent: StoryObj<typeof meta> = {
	args: {
		transparent: true,
		variant: 'success',
	},
	name: 'Primario (Transparente)',
};

const SuccessBorderedTransparent: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		transparent: true,
		variant: 'success',
	},
	name: 'Primario (Con bordes y transparente)',
};

const Danger: StoryObj<typeof meta> = {
	args: {
		variant: 'danger',
	},
	name: 'Primario',
};

const DangerBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		variant: 'danger',
	},
	name: 'Primario (Con bordes)',
};

const DangerShadow: StoryObj<typeof meta> = {
	args: {
		shadow: 'md',
		variant: 'danger',
	},
	name: 'Primario (Con sombra)',
};

const DangerTransparent: StoryObj<typeof meta> = {
	args: {
		transparent: true,
		variant: 'danger',
	},
	name: 'Primario (Transparente)',
};

const DangerBorderedTransparent: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		transparent: true,
		variant: 'danger',
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
