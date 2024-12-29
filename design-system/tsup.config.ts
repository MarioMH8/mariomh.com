import { cp } from 'node:fs/promises';

import { defineConfig } from 'tsup';

export default defineConfig([
	{
		clean: true,
		dts: true,
		entry: ['lib/cva.ts'],
		format: ['esm'],
		onSuccess: async () => {
			await cp('./fonts', './dist/fonts', { recursive: true });
		},
		platform: 'neutral',
		sourcemap: true,
		splitting: true,
	},
]);
