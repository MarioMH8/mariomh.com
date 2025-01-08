import { default as hexadrop } from '@hexadrop/eslint-config';

export default hexadrop(
	{
		typescript: ['./tsconfig.json', './storybook/tsconfig.json'],
	},
	{
		files: ['storybook/src/stories/**/*'],
		rules: {
			'import-sort/exports': 'off',
		},
	},
	{
		files: ['design-system/components/**/src/**/variants.ts'],
		rules: {
			'perfectionist/sort-objects': 'off',
		},
	},
	{
		files: ['app/**/*.astro', 'design-system/components/navigation-menu/src/astro/**/*.astro'],
		rules: {
			'import/no-unresolved': 'off',
		},
	}
);
