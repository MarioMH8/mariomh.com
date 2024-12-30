import type { InputType } from '@storybook/types';

const dimension = {
	control: { required: false, type: 'select' },
	description: 'Tamaño del texto',
	name: 'Tamaño',
	options: ['unset', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', 'huge'],
	table: { category: 'Fuente', defaultValue: { summary: 'base' } },
} satisfies InputType;

export default dimension;
