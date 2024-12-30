import type { InputType } from '@storybook/types';

const variant = {
	control: { required: false, type: 'select' },
	description: 'Variante de color',
	name: 'Variante',
	options: ['primary', 'secondary', 'success', 'danger', 'unset'],
	table: { category: 'Fuente', defaultValue: { summary: 'secondary' } },
} satisfies InputType;

export default variant;
