import type { InputType } from '@storybook/types';

const heading = {
	control: { required: true, type: 'select' },
	description: 'Tamaño de la cebecera',
	name: 'Tamaño',
	options: ['h1', 'h2', 'h3', 'h4'],
	table: { category: 'Personalizado', defaultValue: { summary: 'h1' } },
} satisfies InputType;

export default heading;
