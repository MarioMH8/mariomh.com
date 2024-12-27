import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';

import cv from './cv.json';

export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	integrations: [
		sitemap(),
		robotsTxt(),
		webmanifest({
			background_color: '#FDFFF5',

			config: {
				insertAppleTouchLinks: true,
				insertThemeColorMeta: false,
			},

			description: cv.basics.summary,
			display: 'standalone',
			icon: 'public/favicon.svg',
			name: `${cv.basics.name} - ${cv.basics.summaryShort}`,
			short_name: `Portfolio de ${cv.basics.name}`,
			start_url: '/',

			theme_color: '#C6F118',
		}),
		compress(),
	],
	prefetch: true,
	site: cv.basics.url,
	vite: {
		plugins: [tailwindcss()],
	},
});
