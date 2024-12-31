import type { InputType } from '@storybook/types';

const intentFont = {
	control: { required: false, type: 'select' },
	description: 'Color del texto',
	name: 'Color',
	options: ['primary', 'secondary', 'success', 'danger', 'unset'],
	table: { category: 'Fuente', defaultValue: { summary: 'secondary' } },
} satisfies InputType;

const intentBox = {
	control: { required: false, type: 'select' },
	description: 'Color de la caja',
	name: 'Color',
	options: ['primary', 'secondary'],
	table: { category: 'Personalizado', defaultValue: { summary: 'primary' } },
} satisfies InputType;

const intent = {
	control: { required: false, type: 'select' },
	description: 'Color',
	name: 'Color',
	options: ['primary', 'secondary', 'success', 'danger'],
	table: { category: 'Personalizado', defaultValue: { summary: 'primary' } },
} satisfies InputType;

export { intent, intentBox, intentFont };
