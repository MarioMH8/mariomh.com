import { defineConfig } from 'vite';
import { externalizeDeps } from 'vite-plugin-externalize-deps';

export default defineConfig({
	build: {
		lib: {
			formats: ['es'],
			entry: ['src/index.ts'],
		},
		minify: false,
		sourcemap: false,
	},
	plugins: [externalizeDeps()],
});
