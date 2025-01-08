import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const post = defineCollection({
	schema: ({ image }) =>
		z.object({
			image: image(),
			imageAlt: z.string(),
			resume: z.string().optional(),
			tags: z.array(z.string()),
			title: z.string(),
		}),
});

const project = defineCollection({
	schema: ({ image }) =>
		z.object({
			category: z.union([z.literal('portfolio'), z.literal('app'), z.literal('lib')]),
			href: z.string().url(),
			image: image(),
			imageAlt: z.string(),
			resume: z.string(),
			target: z.literal('_blank').optional(),
			title: z.string(),
		}),
});

const services = defineCollection({
	loader: glob({ base: './src/content/service', pattern: '**/*.json' }),
	schema: z.object({
		content: z.string(),
		title: z.string(),
	}),
});

// eslint-disable-next-line import/prefer-default-export
export const collections = { post, project, services };
