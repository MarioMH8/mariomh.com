import package_ from '@mariomh/span/package.json';
import component from '@mariomh/span/react';
import {
	align,
	asChild,
	children,
	family,
	intentFont,
	noSelect,
	tracking,
	variantFont,
	weight,
} from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	args: {
		children: 'exercitation',
	},
	argTypes: {
		align,
		asChild,
		children,
		family,
		intent: intentFont,
		noSelect,
		tracking,
		variant: variantFont,
		weight,
	},
	component,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ satisfies unknown satisfies { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Tipografía/Texto',
} satisfies Meta<typeof component>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

const DefaultBright: StoryObj<typeof meta> = {
	args: {
		variant: 'bright',
	},
	name: 'Por defecto (Vívido)',
};

const DefaultMuted: StoryObj<typeof meta> = {
	args: {
		variant: 'muted',
	},
	name: 'Por defecto (Apagado)',
};

const Primary: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
	},
	name: 'Primario',
};

const PrimaryBright: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
		variant: 'bright',
	},
	name: 'Primario (Vívido)',
};

const PrimaryMuted: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
		variant: 'muted',
	},
	name: 'Primario (Apagado)',
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
	name: 'Secundario (Vívido)',
};

const SecondaryMuted: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
		variant: 'muted',
	},
	name: 'Secundario (Apagado)',
};

const Success: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
	},
	name: 'Correcto',
};

const SuccessBright: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
		variant: 'bright',
	},
	name: 'Correcto (Vívido)',
};

const SuccessMuted: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
		variant: 'muted',
	},
	name: 'Correcto (Apagado)',
};

const Danger: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
	},
	name: 'Error',
};

const DangerBright: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
		variant: 'bright',
	},
	name: 'Error (Vívido)',
};

const DangerMuted: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
		variant: 'muted',
	},
	name: 'Error (Apagado)',
};

export {
	Default,
	DefaultBright,
	DefaultMuted,
	Primary,
	PrimaryBright,
	PrimaryMuted,
	Secondary,
	SecondaryBright,
	SecondaryMuted,
	Success,
	SuccessBright,
	SuccessMuted,
	Danger,
	DangerBright,
	DangerMuted,
};

export default meta;
