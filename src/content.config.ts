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

const testimonial = defineCollection({
	schema: z.object({
		author: z.string().optional(),
		content: z.string(),
	}),
	type: 'data',
});

const collections = {
	post,
	project,
	testimonial,
};

// eslint-disable-next-line import/prefer-default-export
export { collections };
