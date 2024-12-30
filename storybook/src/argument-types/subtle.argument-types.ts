import type { InputType } from '@storybook/types';

const subtle = {
	description: 'Variante sutil',
	name: 'Sutil',
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
	type: { name: 'boolean', required: false },
} satisfies InputType;

export default subtle;
