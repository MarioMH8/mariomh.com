import type { InputType } from '@storybook/types';

const activationMode: InputType = {
	control: { required: false, type: 'radio' },
	description: 'Modo de activación',
	name: 'Activación',
	options: ['automatic', 'manual'],
	table: { category: 'Personalizado', defaultValue: { summary: 'automatic' } },
};

export default activationMode;
