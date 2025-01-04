import package_ from '@mariomh/input/package.json';
import Component from '@mariomh/input/react';
import {
	asChild,
	dimensionFont,
	disabled,
	family,
	id,
	intent,
	noSelect,
	placeholder,
	tracking,
	type,
	variantInput,
	weight,
} from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * These stories showcase the input
 */
const meta = {
	args: {
		autoComplete: 'off',
		id: 'email-default',
		placeholder: 'usuario@dominio.es',
		type: 'email',
	},
	argTypes: {
		asChild,
		dimension: dimensionFont,
		disabled,
		family,
		id,
		intent,
		noSelect,
		placeholder,
		tracking,
		type,
		variant: variantInput,
		weight,
	},
	component: Component,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Formulario/Entrada',
} as Meta<typeof Component>;

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

const PrimaryTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
		variant: 'transparent',
	},
	name: 'Primario (Transparente)',
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

const SecondaryTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
		variant: 'transparent',
	},
	name: 'Secundario (Transparente)',
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

const SuccessTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
		variant: 'transparent',
	},
	name: 'Correcto (Transparente)',
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

const DangerTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
		variant: 'transparent',
	},
	name: 'Error (Transparente)',
};

export {
	Primary,
	PrimarySubtle,
	PrimaryTransparent,
	Secondary,
	SecondarySubtle,
	SecondaryTransparent,
	Success,
	SuccessSubtle,
	SuccessTransparent,
	Danger,
	DangerSubtle,
	DangerTransparent,
};

export default meta;
