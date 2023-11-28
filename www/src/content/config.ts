import { defineCollection, z } from 'astro:content';

const project = defineCollection({
	schema: ({ image }) =>
		z.object({
			category: z.union([z.literal('portfolio'), z.literal('app'), z.literal('lib')]),
			title: z.string(),
			image: image(),
			imageAlt: z.string(),
			resume: z.string(),
			target: z.literal('_blank').optional(),
			href: z.string().url(),
		}),
});

const post = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			resume: z.string().optional(),
			tags: z.array(z.string()),
			image: image(),
			imageAlt: z.string(),
		}),
});

const services = defineCollection({
	schema: z.object({
		content: z.string(),
		author: z.string().optional(),
	}),
	type: 'data',
});

// eslint-disable-next-line import/prefer-default-export
export const collections = {
	project,
	post,
	services,
};
