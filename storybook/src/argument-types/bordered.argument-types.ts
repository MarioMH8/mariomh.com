import type { InputType } from '@storybook/types';

const bordered = {
	control: 'boolean',
	description: 'Variante con bordes',
	name: 'Bordes',
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

export default bordered;
