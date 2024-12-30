import type { InputType } from '@storybook/types';

const huge = {
	control: 'boolean',
	description: 'Haz la cabecera enorme',
	name: 'Enorme',
	table: { category: 'Personalizado', defaultValue: { summary: 'false' } },
} satisfies InputType;

export default huge;
