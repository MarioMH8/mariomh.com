import resume from '@mariomh8/resume';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const project = defineCollection({
	loader: glob({ base: './src/content/project', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			category: z.union([z.literal('portfolio'), z.literal('app'), z.literal('lib')]),
			href: z.url(),
			image: image(),
			imageAlt: z.string(),
			resume: z.string(),
			target: z.literal('_blank').optional(),
			title: z.string(),
		}),
});

const post = defineCollection({
	loader: glob({ base: './src/content/post', pattern: '**/*.md' }),
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
	loader: () =>
		(resume.references ?? []).map(reference => ({
			...reference,
			id: reference.name?.replaceAll(' ', '-').toLowerCase() ?? Math.random().toString(36).slice(2, 8),
		})),
	schema: z.object({
		name: z.string().optional(),
		position: z.string().optional(),
		reference: z.string(),
		url: z.url().optional(),
	}),
});

const collections = {
	post,
	project,
	testimonial,
};

// eslint-disable-next-line import/prefer-default-export
export { collections };
