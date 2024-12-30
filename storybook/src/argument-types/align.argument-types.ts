import type { InputType } from '@storybook/types';

const align = {
	control: { required: false, type: 'select' },
	description: 'Alinear el contenido',
	name: 'Alinear',
	options: ['start', 'center', 'end'],
	table: { category: 'Fuente', defaultValue: { summary: 'undefined' } },
} satisfies InputType;

export default align;
