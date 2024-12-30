import type { InputType } from '@storybook/types';

const transparent = {
	description: 'Variante transparente',
	name: 'Transparente',
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
	type: { name: 'boolean', required: false },
} satisfies InputType;

export default transparent;
