import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    accent: z.string(),
    title: z.string().optional(),
    context: z.string(),
    year: z.string(),
    stack: z.array(z.string()),
    link: z.string().url().optional(),
    link_label: z.string().optional(),
    order: z.number().int().positive(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    pullquote: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
        width: z.number().int().positive().optional(),
        height: z.number().int().positive().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
