import { glob } from 'astro/loaders';
import type { SchemaContext } from 'astro:content';
import { defineCollection, z } from 'astro:content';

const imageSchema = ({ image }: SchemaContext) =>
	z.object({
		description: z.string().optional(),
		image: image(),
	});

const project = defineCollection({
	loader: glob({ base: './src/content/project', pattern: '**/*.md' }),
	schema: ({ image }: SchemaContext) =>
		z.object({
			category: z.union([z.literal('portfolio'), z.literal('app'), z.literal('lib')]),
			href: z.string().url(),
			image: imageSchema({ image }),
			resume: z.string(),
			target: z.literal('_blank').optional(),
			title: z.string(),
		}),
});

const post = defineCollection({
	loader: glob({ base: './src/content/post', pattern: '**/*.md' }),
	schema: ({ image }: SchemaContext) =>
		z.object({
			image: imageSchema({ image }),
			resume: z.string().optional(),
			tags: z.array(z.string()),
			title: z.string(),
		}),
});

const services = defineCollection({
	loader: glob({ base: './src/content/service', pattern: '**/*.json' }),
	schema: z.object({
		author: z.string().optional(),
		content: z.string(),
	}),
});

// eslint-disable-next-line import/prefer-default-export
export const collections = {
	post,
	project,
	services,
};
