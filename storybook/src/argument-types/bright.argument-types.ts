import type { InputType } from '@storybook/types';

const bright = {
	control: 'boolean',
	description: 'Mostrar el color vívido',
	name: 'Vívido',
	table: { category: 'Fuente', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

export default bright;
