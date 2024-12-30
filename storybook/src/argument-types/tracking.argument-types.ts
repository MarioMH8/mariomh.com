import type { InputType } from '@storybook/types';

const tracking = {
	control: { required: true, type: 'select' },
	description: 'Espacio entra las letras',
	name: 'Espaciado',
	options: ['sm', 'base', 'lg'],
	table: { category: 'Fuente', defaultValue: { summary: 'base' } },
} satisfies InputType;

export default tracking;
