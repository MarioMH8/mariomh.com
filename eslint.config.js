import { default as hexadrop } from '@hexadrop/eslint-config';

export default hexadrop(
	{
		module: {
			ignore: [
				'@mariomh/logo/astro',
				'@mariomh/button/class-name',
				'@mariomh/button/astro',
				'@mariomh/navigation-menu/astro',
				'astro-seo',
			],
		},
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
	}
);
