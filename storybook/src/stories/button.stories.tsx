import package_ from '@mariomh/button/package.json';
import component from '@mariomh/button/react';
import {
	asChild,
	bordered,
	children,
	dimensionFont,
	disabled,
	family,
	icon,
	intent,
	noSelect,
	tracking,
	variantButton,
	weight,
} from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	args: {
		children: 'Botón',
		disabled: false,
	},
	argTypes: {
		asChild,
		bordered,
		children,
		dimension: dimensionFont,
		disabled,
		family,
		icon,
		intent,
		noSelect,
		tracking,
		variant: variantButton,
		weight,
	},
	component,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Botón',
} as Meta<typeof component>;

const Primary: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
	},
	name: 'Primario',
};

const PrimarySubtle: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
		variant: 'subtle',
	},
	name: 'Primario (Sutil)',
};

const PrimaryBright: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
		variant: 'bright',
	},
	name: 'Primario (Vívido)',
};

const PrimaryTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
		variant: 'transparent',
	},
	name: 'Primario (Transparente)',
};

const PrimaryBorder: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'primary',
	},
	name: 'Primario (Con borde)',
};

const PrimaryBorderSubtle: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'primary',
		variant: 'subtle',
	},
	name: 'Primario (Con borde y sutil)',
};

const PrimaryBorderBright: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'primary',
		variant: 'bright',
	},
	name: 'Primario (Con borde y vívido)',
};

const PrimaryBorderTransparent: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'primary',
		variant: 'transparent',
	},
	name: 'Primario (Con borde y transparente)',
};

const PrimaryLink: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
		variant: 'link',
	},
	name: 'Primario (Enlace)',
};

const Secondary: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
	},
	name: 'Secundario',
};

const SecondarySubtle: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
		variant: 'subtle',
	},
	name: 'Secundario (Sutil)',
};

const SecondaryBright: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
		variant: 'bright',
	},
	name: 'Secundario (Vívido)',
};

const SecondaryTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
		variant: 'transparent',
	},
	name: 'Secundario (Transparente)',
};

const SecondaryBorder: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'secondary',
	},
	name: 'Secundario (Con borde)',
};

const SecondaryBorderSubtle: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'secondary',
		variant: 'subtle',
	},
	name: 'Secundario (Con borde y sutil)',
};

const SecondaryBorderBright: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'secondary',
		variant: 'bright',
	},
	name: 'Secundario (Con borde y vívido)',
};

const SecondaryBorderTransparent: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'secondary',
		variant: 'transparent',
	},
	name: 'Secundario (Con borde y transparente)',
};

const SecondaryLink: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
		variant: 'link',
	},
	name: 'Secundario (Enlace)',
};

const Success: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
	},
	name: 'Correcto',
};

const SuccessSubtle: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
		variant: 'subtle',
	},
	name: 'Correcto (Sutil)',
};

const SuccessBright: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
		variant: 'bright',
	},
	name: 'Correcto (Vívido)',
};

const SuccessTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
		variant: 'transparent',
	},
	name: 'Correcto (Transparente)',
};

const SuccessBorder: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'success',
	},
	name: 'Correcto (Con borde)',
};

const SuccessBorderSubtle: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'success',
		variant: 'subtle',
	},
	name: 'Correcto (Con borde y sutil)',
};

const SuccessBorderBright: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'success',
		variant: 'bright',
	},
	name: 'Correcto (Con borde y vívido)',
};

const SuccessBorderTransparent: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'success',
		variant: 'transparent',
	},
	name: 'Correcto (Con borde y transparente)',
};

const SuccessLink: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
		variant: 'link',
	},
	name: 'Correcto (Enlace)',
};

const Danger: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
	},
	name: 'Error',
};

const DangerSubtle: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
		variant: 'subtle',
	},
	name: 'Error (Sutil)',
};

const DangerBright: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
		variant: 'bright',
	},
	name: 'Error (Vívido)',
};

const DangerTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
		variant: 'transparent',
	},
	name: 'Error (Transparente)',
};

const DangerBorder: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'danger',
	},
	name: 'Error (Con borde)',
};

const DangerBorderSubtle: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'danger',
		variant: 'subtle',
	},
	name: 'Error (Con borde y sutil)',
};

const DangerBorderBright: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'danger',
		variant: 'bright',
	},
	name: 'Error (Con borde y vívido)',
};

const DangerBorderTransparent: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'danger',
		variant: 'transparent',
	},
	name: 'Error (Con borde y transparente)',
};

const DangerLink: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
		variant: 'link',
	},
	name: 'Error (Enlace)',
};

export {
	Primary,
	PrimarySubtle,
	PrimaryBright,
	PrimaryTransparent,
	PrimaryLink,
	PrimaryBorder,
	PrimaryBorderSubtle,
	PrimaryBorderBright,
	PrimaryBorderTransparent,
	Secondary,
	SecondarySubtle,
	SecondaryBright,
	SecondaryTransparent,
	SecondaryLink,
	SecondaryBorder,
	SecondaryBorderSubtle,
	SecondaryBorderBright,
	SecondaryBorderTransparent,
	Success,
	SuccessSubtle,
	SuccessBright,
	SuccessTransparent,
	SuccessLink,
	SuccessBorder,
	SuccessBorderSubtle,
	SuccessBorderBright,
	SuccessBorderTransparent,
	Danger,
	DangerSubtle,
	DangerBright,
	DangerTransparent,
	DangerLink,
	DangerBorder,
	DangerBorderSubtle,
	DangerBorderBright,
	DangerBorderTransparent,
};

export default meta;
