import type { InputType } from '@storybook/types';

const orientation: InputType = {
	control: { required: false, type: 'radio' },
	description: 'Orientación de las pestañas',
	name: 'Orientación',
	options: ['horizontal', 'vertical'],
	table: { category: 'Personalizado', defaultValue: { summary: 'horizontal' } },
};

export default orientation;
