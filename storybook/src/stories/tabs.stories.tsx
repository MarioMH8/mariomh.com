import {
	activationMode,
	asChild,
	defaultValue,
	direction,
	loop,
	onValueChange,
	orientation,
	value,
} from '@mariomh/storybook/argument-types';
import package_ from '@mariomh/tabs/package.json';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@mariomh/tabs/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	args: {
		defaultValue: 'Occaecat',
	},
	argTypes: {
		activationMode,
		asChild,
		defaultValue,
		direction,
		loop,
		onValueChange,
		orientation,
		value,
	},
	component: Tabs,
	parameters: {
		category: 'Organismo',
		exports: ['react'],
		import: `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@mariomh/tabs/react';`,
		package: (package_ as unknown as { name: string }).name,
	},
	// @ts-expect-error TS2339: Property loop does not exist on type
	render: ({ loop, ...arguments_ }) => (
		<Tabs {...arguments_}>
			{}
			<TabsList
				aria-label='Ipsum proident ullamco nisi.'
				loop={loop as boolean}>
				<TabsTrigger value='Occaecat'>Occaecat</TabsTrigger>
				<TabsTrigger value='Veniam'>Veniam</TabsTrigger>
				<TabsTrigger value='Tempor'>Tempor</TabsTrigger>
				<TabsTrigger value='Deserunt'>Deserunt</TabsTrigger>
			</TabsList>
			<TabsContent value='Occaecat'>
				Consectetur dolor amet eiusmod Lorem eiusmod anim. Lorem minim esse sunt tempor amet cillum voluptate
				veniam eiusmod consequat in ex commodo nulla officia. Pariatur culpa do occaecat ullamco irure eu est
				mollit ex consectetur cillum. Commodo tempor sit commodo occaecat qui ipsum.
			</TabsContent>
			<TabsContent value='Veniam'>
				Excepteur nisi sit laborum ullamco voluptate incididunt enim id incididunt laborum aliqua minim
				reprehenderit velit. Non minim eiusmod sint. Duis tempor adipisicing enim excepteur Lorem in dolore
				laboris anim reprehenderit culpa irure incididunt veniam. Aliqua adipisicing quis cillum in irure mollit
				esse sint aliqua.
			</TabsContent>
			<TabsContent value='Tempor'>
				Reprehenderit irure nulla aliquip Lorem. Exercitation non est magna culpa eu do nisi aute sint.
				Consequat sunt tempor aute commodo esse adipisicing ipsum. Consectetur irure reprehenderit eiusmod nulla
				sint sunt sunt exercitation nisi qui ea et. Incididunt dolore fugiat consectetur in magna ipsum nisi
				ipsum Lorem aute nisi amet ipsum. Dolor esse laboris officia mollit qui. Minim nulla magna mollit
				voluptate commodo velit cillum nostrud sunt aute cillum incididunt culpa. Nulla elit quis consectetur
				reprehenderit exercitation.
			</TabsContent>
			<TabsContent value='Deserunt'>
				Consequat proident esse ut voluptate adipisicing amet nisi consequat. Amet mollit quis nulla velit
				fugiat labore ipsum velit dolore mollit sunt. Quis ex reprehenderit laboris quis deserunt ex occaecat
				irure elit pariatur ad aliqua. Ipsum ex aliqua nulla velit reprehenderit non enim. Cupidatat commodo non
				elit sunt. Do dolor Lorem aliquip deserunt tempor duis consequat ipsum aute sit exercitation. Cupidatat
				tempor laborum tempor eu adipisicing quis aliqua ut anim duis do nostrud do.
			</TabsContent>
		</Tabs>
	),
	tags: ['autodocs'],
	title: 'Organismos/Pestañas',
} as Meta<typeof Tabs>;

export const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

export default meta;
