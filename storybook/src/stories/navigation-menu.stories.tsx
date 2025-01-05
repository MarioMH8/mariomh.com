import package_ from '@mariomh/navigation-menu/package.json';
import { NavigationMenu, NavigationMenuLink } from '@mariomh/navigation-menu/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	component: NavigationMenu,
	parameters: {
		category: 'Átomo',
		exports: ['astro', 'react'],
		package: (package_ satisfies unknown satisfies { name: string }).name,
	},
	render: arguments_ => (
		<NavigationMenu {...arguments_}>
			<NavigationMenuLink href='#'>Inicio</NavigationMenuLink>
			<NavigationMenuLink href='#'>Servicios</NavigationMenuLink>
			<NavigationMenuLink
				active
				href='#'>
				Blog
			</NavigationMenuLink>
		</NavigationMenu>
	),
	tags: ['autodocs'],
	title: 'Organismo/Menú de navegación',
} satisfies Meta<typeof NavigationMenu>;

const Default: StoryObj<typeof meta> = {
	name: 'Por defecto',
};

export { Default };

export default meta;
