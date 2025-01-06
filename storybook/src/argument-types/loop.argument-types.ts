import type { InputType } from '@storybook/types';

const loop: InputType = {
	description: 'Pestañas en bucle',
	name: 'Bucle',
	table: { category: 'Personalizado', defaultValue: { summary: 'true' } },
	type: { name: 'boolean', required: false },
};

export default loop;
