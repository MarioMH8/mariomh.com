import type { InputType } from '@storybook/types';

const variantBadge = {
	control: { required: false, type: 'select' },
	description: 'Variante de la insignia',
	name: 'Variante',
	options: ['transparent'],
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

const variantBox = {
	control: { required: false, type: 'select' },
	description: 'Variante de la caja',
	name: 'Variante',
	options: ['bright', 'subtle', 'transparent'],
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

const variantFont = {
	control: { required: false, type: 'select' },
	description: 'Variante de texto',
	name: 'Variante',
	options: ['bright', 'muted'],
	table: { category: 'Fuente', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

const variantCheckbox = {
	control: { required: false, type: 'select' },
	description: 'Variante del checkbox',
	name: 'Variante',
	options: ['bright', 'transparent'],
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

const variantInput = {
	control: { required: false, type: 'select' },
	description: 'Variante del input',
	name: 'Variante',
	options: ['subtle', 'transparent'],
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

const variantButton = {
	control: { required: false, type: 'select' },
	description: 'Variante de botón',
	name: 'Variante',
	options: ['bright', 'link', 'subtle', 'transparent'],
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

const variantLogo: InputType = {
	control: { required: false, type: 'select' },
	description: 'Variante de forma',
	name: 'Variante',
	options: ['isotipo', 'logotipo'],
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
};

export { variantBadge, variantBox, variantButton, variantCheckbox, variantFont, variantInput, variantLogo };
