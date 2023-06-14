import { defineConfig } from 'astro/config';
import webmanifest from 'astro-webmanifest';
import sitemap from '@astrojs/sitemap';
import compress from "astro-compress";
import zip from "astro-compressor";
import robotsTxt from 'astro-robots-txt';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
	site: 'https://mariomh.com',
    integrations: [
		sitemap(),
		robotsTxt(),
        webmanifest({
            /**
             * required
             **/
            name: 'MarioMH | Desarrollador JavaScript',

            /**
             * optional
             **/
            icon: 'public/favicon.svg',

            short_name: 'MarioMH',
            description: 'MarioMH es un desarrollador Full Stack especializado en JavaScript.',
            start_url: '/',
            theme_color: '#C6F118',
            background_color: '#FDFFF5',
            display: 'standalone',

			config: {
				insertAppleTouchLinks: true,
				insertThemeColorMeta: false,
			}
        }),
		prefetch(),
		compress(),
		zip(),
    ],
});
