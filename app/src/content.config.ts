import { defineCollection, z } from 'astro:content';

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

// eslint-disable-next-line import/prefer-default-export
export const collections = { project };
