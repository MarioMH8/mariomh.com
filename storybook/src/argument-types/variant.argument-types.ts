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

export { variantBadge, variantBox, variantFont };
