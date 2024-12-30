import type { InputType } from '@storybook/types';

const family = {
	control: { required: false, type: 'select' },
	description: 'Fuente del texto',
	name: 'Fuente',
	options: ['primary', 'secondary'],
	table: { category: 'Fuente', defaultValue: { summary: 'primary' } },
} satisfies InputType;

export default family;
