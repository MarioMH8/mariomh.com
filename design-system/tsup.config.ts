import { cp } from 'node:fs/promises';

import { defineConfig } from 'tsup';

export default defineConfig([
	{
		clean: true,
		dts: true,
		entry: [
			'lib/cva.ts',
			'components/font/class-name.ts',
			'components/font/react.tsx',
			'components/font/variants.ts',
		],
		format: ['esm'],
		onSuccess: async () => {
			await Promise.all([
				cp('./fonts', './dist/fonts', { recursive: true }),
				cp('./tailwind', './dist/tailwind', { recursive: true }),
			]);
		},
		platform: 'neutral',
		sourcemap: true,
		splitting: true,
	},
]);
