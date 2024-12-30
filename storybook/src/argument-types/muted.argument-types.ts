import type { InputType } from '@storybook/types';

const muted = {
	control: 'boolean',
	description: 'Mostrar el color de texto apagado',
	name: 'Apagado',
	table: { category: 'Fuente', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

export default muted;
