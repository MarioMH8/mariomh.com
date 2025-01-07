import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';
import paths from 'vite-tsconfig-paths';

import cv from './cv.json';

export default defineConfig({
	integrations: [
		sitemap(),
		robotsTxt(),
		webmanifest({
			background_color: '#0F1214',

			config: {
				insertAppleTouchLinks: true,
				insertThemeColorMeta: false,
			},

			description: cv.basics.summary,
			display: 'standalone',
			icon: 'public/favicon.svg',
			name: cv.basics.name,
			short_name: cv.basics.shortName,
			start_url: '/',

			theme_color: '#FFFFFF',
		}),
		compress(),
	],
	prefetch: true,
	site: cv.basics.url,
	vite: {
		plugins: [tailwindcss(), paths({ projects: ['./tsconfig.json'], root: '../' })],
		ssr: {
			noExternal: true,
		},
	},
});
