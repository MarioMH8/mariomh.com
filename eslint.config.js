import { default as hexadrop } from '@hexadrop/eslint-config';

export default hexadrop({
	module: {
		ignore: ['@cv', '@/styles/tailwind.css', '@/layouts/layout.astro', 'astro-seo'],
	},
});
