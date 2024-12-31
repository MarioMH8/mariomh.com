import package_ from '@mariomh/checkbox/package.json';
import Comp from '@mariomh/checkbox/react';
import Label from '@mariomh/label/react';
import {
	asChild,
	bordered,
	dimensionFont,
	disabled,
	id,
	intent,
	title,
	variantCheckbox,
} from '@mariomh/storybook/argument-types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	args: {
		title: 'Aceptar los términos y condiciones',
	},
	argTypes: {
		asChild,
		bordered,
		dimension: dimensionFont,
		disabled,
		id,
		intent,
		title,
		variant: variantCheckbox,
	},
	component: Comp,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ as unknown as { name: string }).name,
	},
	tags: ['autodocs'],
	title: 'Átomos/Formulario/Checkbox',
} as Meta<typeof Comp>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

const WithLabel: StoryObj<typeof meta> = {
	args: {
		id: 'terms',
	},
	name: 'Con label',
	render: properties => {
		const labelId = `${properties.id ?? ''}-label`;

		return (
			<div className='flex items-center'>
				<Comp
					{...properties}
					aria-labelledby={labelId}
				/>
				<Label
					className='pl-4'
					htmlFor={properties.id}
					id={labelId}
					intent={properties.intent === 'primary' ? 'secondary' : properties.intent}>
					Aceptar los términos y condiciones.
				</Label>
			</div>
		);
	},
};

const DefaultTransparent: StoryObj<typeof meta> = {
	args: {
		variant: 'transparent',
	},
	name: 'Por defecto (Transparente)',
};

const DefaultBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
	},
	name: 'Por defecto (Con borde)',
};

const DefaultBright: StoryObj<typeof meta> = {
	args: {
		variant: 'bright',
	},
	name: 'Por defecto (Con vívido)',
};

const Primary: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
	},
	name: 'Primario',
};

const PrimaryTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
		variant: 'transparent',
	},
	name: 'Primario (Transparente)',
};

const PrimaryBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'primary',
	},
	name: 'Primario (Con borde)',
};

const PrimaryBright: StoryObj<typeof meta> = {
	args: {
		intent: 'primary',
		variant: 'bright',
	},
	name: 'Primario (Con vívido)',
};

const Secondary: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
	},
	name: 'Secundario',
};

const SecondaryTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
		variant: 'transparent',
	},
	name: 'Secundario (Transparente)',
};

const SecondaryBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'secondary',
	},
	name: 'Secundario (Con borde)',
};

const SecondaryBright: StoryObj<typeof meta> = {
	args: {
		intent: 'secondary',
		variant: 'bright',
	},
	name: 'Secundario (Con vívido)',
};

const Success: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
	},
	name: 'Correcto',
};

const SuccessTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
		variant: 'transparent',
	},
	name: 'Correcto (Transparente)',
};

const SuccessBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'success',
	},
	name: 'Correcto (Con borde)',
};

const SuccessBright: StoryObj<typeof meta> = {
	args: {
		intent: 'success',
		variant: 'bright',
	},
	name: 'Correcto (Con vívido)',
};

const Danger: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
	},
	name: 'Error',
};

const DangerTransparent: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
		variant: 'transparent',
	},
	name: 'Error (Transparente)',
};

const DangerBordered: StoryObj<typeof meta> = {
	args: {
		bordered: true,
		intent: 'danger',
	},
	name: 'Error (Con borde)',
};

const DangerBright: StoryObj<typeof meta> = {
	args: {
		intent: 'danger',
		variant: 'bright',
	},
	name: 'Error (Con vívido)',
};

export {
	Default,
	WithLabel,
	DefaultTransparent,
	DefaultBordered,
	DefaultBright,
	Primary,
	PrimaryTransparent,
	PrimaryBordered,
	PrimaryBright,
	Secondary,
	SecondaryTransparent,
	SecondaryBordered,
	SecondaryBright,
	Success,
	SuccessTransparent,
	SuccessBordered,
	SuccessBright,
	Danger,
	DangerTransparent,
	DangerBordered,
	DangerBright,
};

export default meta;
