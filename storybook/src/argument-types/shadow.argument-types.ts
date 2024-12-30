import type { InputType } from '@storybook/types';

const shadow = {
	control: { required: false, type: 'select' },
	description: 'Tamaño de la sombra',
	name: 'Sombra',
	options: ['sm', 'md', 'lg', 'xl'],
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

export default shadow;
