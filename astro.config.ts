import sitemap from '@astrojs/sitemap';
import resume from '@mariomh/resume';
import compress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import type { WebmanifestOptions } from 'astro-webmanifest';
import manifest from 'astro-webmanifest';

const { name = '', shortName, summary } = resume.basics ?? {};

export default defineConfig({
	integrations: [
		sitemap(),
		robotsTxt(),
		manifest({
			background_color: '#001C16',

			config: {
				insertAppleTouchLinks: true,
				insertThemeColorMeta: false,
			},

			description: summary,
			display: 'standalone',
			icon: 'public/favicon.svg',
			name,
			short_name: typeof shortName === 'string' ? shortName : undefined,
			start_url: '/',

			theme_color: '#c6f118',
		} as WebmanifestOptions),
		compress(),
	],
	prefetch: false,
	site: 'https://mariomh.com',
	vite: {
		plugins: [tailwindcss()],
	},
});
