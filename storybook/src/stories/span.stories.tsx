import package_ from '@mariomh/span/package.json';
import component from '@mariomh/span/react';
import {
	asChild,
	bright,
	children,
	dimension,
	family,
	muted,
	noSelect,
	tracking,
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
		bright,
		children,
		dimension,
		family,
		muted,
		noSelect,
		tracking,
		variant,
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
		bright: true,
	},
	name: 'Por defecto (Vívido)',
};

const DefaultMuted: StoryObj<typeof meta> = {
	args: {
		muted: true,
	},
	name: 'Por defecto (Apagado)',
};

const Primary: StoryObj<typeof meta> = {
	args: {
		variant: 'primary',
	},
	name: 'Primario',
};

const PrimaryBright: StoryObj<typeof meta> = {
	args: {
		bright: true,
		variant: 'primary',
	},
	name: 'Primario (Vívido)',
};

const PrimaryMuted: StoryObj<typeof meta> = {
	args: {
		muted: true,
		variant: 'primary',
	},
	name: 'Primario (Apagado)',
};

const Secondary: StoryObj<typeof meta> = {
	args: {
		variant: 'secondary',
	},
	name: 'Secundario',
};

const SecondaryBright: StoryObj<typeof meta> = {
	args: {
		bright: true,
		variant: 'secondary',
	},
	name: 'Secundario (Vívido)',
};

const SecondaryMuted: StoryObj<typeof meta> = {
	args: {
		muted: true,
		variant: 'secondary',
	},
	name: 'Secundario (Apagado)',
};

const Success: StoryObj<typeof meta> = {
	args: {
		variant: 'success',
	},
	name: 'Correcto',
};

const SuccessBright: StoryObj<typeof meta> = {
	args: {
		bright: true,
		variant: 'success',
	},
	name: 'Correcto (Vívido)',
};

const SuccessMuted: StoryObj<typeof meta> = {
	args: {
		muted: true,
		variant: 'success',
	},
	name: 'Correcto (Apagado)',
};

const Danger: StoryObj<typeof meta> = {
	args: {
		variant: 'danger',
	},
	name: 'Error',
};

const DangerBright: StoryObj<typeof meta> = {
	args: {
		bright: true,
		variant: 'danger',
	},
	name: 'Error (Vívido)',
};

const DangerMuted: StoryObj<typeof meta> = {
	args: {
		muted: true,
		variant: 'danger',
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
