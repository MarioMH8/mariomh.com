import { cp } from 'node:fs/promises';

import { defineConfig } from 'tsup';

export default defineConfig([
	{
		clean: true,
		dts: true,
		entry: [
			'lib/cva.ts',
			'components/focus/class-name.ts',
			'components/focus/react.tsx',
			'components/focus/variants.ts',
			'components/font/class-name.ts',
			'components/font/react.tsx',
			'components/font/variants.ts',
			'components/link/class-name.ts',
			'components/link/properties.ts',
			'components/link/react.tsx',
			'components/link/variants.ts',
			'components/round/class-name.ts',
			'components/round/react.tsx',
			'components/round/variants.ts',
		],
		format: ['esm'],
		onSuccess: async () => {
			await Promise.all([
				cp('./fonts', './dist/fonts', { recursive: true }),
				cp('./tailwind', './dist/tailwind', { recursive: true }),
				cp('./components/link/astro.ts', './dist/components/link/astro.ts'),
				cp('./components/link/astro.astro', './dist/components/link/astro.astro'),
			]);
		},
		platform: 'neutral',
		sourcemap: true,
		splitting: true,
	},
]);
