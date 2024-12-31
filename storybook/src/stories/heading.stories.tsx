import package_ from '@mariomh/heading/package.json';
import component from '@mariomh/heading/react';
import {
	align,
	asChild,
	children,
	family,
	heading,
	huge,
	intentFont,
	noSelect,
	tracking,
	variantFont,
	weight,
} from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	args: {
		children: `Voluptate consequat id voluptate`,
		heading: 'h1',
	},
	argTypes: {
		align,
		asChild,
		children,
		family,
		heading,
		huge,
		intent: intentFont,
		noSelect,
		tracking: {
			...tracking,
			table: { category: 'Fuente', defaultValue: { summary: 'sm' } },
		},
		variant: variantFont,
		weight: {
			...weight,
			table: { category: 'Fuente', defaultValue: { summary: 'bold' } },
		},
	},
	component,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Tipografía/Cabecera',
} as Meta<typeof component>;

const H1: StoryObj<typeof meta> = {
	name: 'Cabecera 1',
};

const H2: StoryObj<typeof meta> = {
	args: {
		heading: 'h2',
	},
	name: 'Cabecera 2',
};

const H3: StoryObj<typeof meta> = {
	args: {
		heading: 'h3',
	},
	name: 'Cabecera 3',
};

const H4: StoryObj<typeof meta> = {
	args: {
		heading: 'h4',
	},
	name: 'Cabecera 4',
};

const Huge: StoryObj<typeof meta> = {
	args: {
		children: `Voluptate`,
		heading: 'h1',
		huge: true,
	},
	name: 'Cabecera 1 (Enorme)',
};

const Bright: StoryObj<typeof meta> = {
	args: {
		variant: 'bright',
	},
	name: 'Vívido',
};

const Muted: StoryObj<typeof meta> = {
	args: {
		variant: 'muted',
	},
	name: 'Apagado',
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
	H1,
	H2,
	H3,
	H4,
	Huge,
	Bright,
	Muted,
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
