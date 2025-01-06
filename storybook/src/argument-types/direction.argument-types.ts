import type { InputType } from '@storybook/types';

const direction: InputType = {
	control: { required: false, type: 'radio' },
	description: 'Orientación de las pestañas',
	name: 'Dirección de lectura',
	options: ['ltr', 'rtl'],
	table: { category: 'Personalizado', defaultValue: { summary: 'undefined' } },
};

export default direction;
