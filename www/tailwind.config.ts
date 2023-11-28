import plugin from '@mariomh/theme';
import type { Config } from 'tailwindcss';

const theme = plugin({});
const plugins = theme.config?.plugins ?? [];

const config: Config = {
	darkMode: ['class', 'media'],
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx,astro}', '../node_modules/@mariomh/**/*.{js,ts,jsx,tsx,mdx,astro}'],
	plugins: [theme, ...plugins],
	theme: {
		extend: {
			backgroundImage: {
				keyboard: `url('/assets/keyboard.webp')`,
			},
		},
	},
};

export default config;
