import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const main = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/main" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    youtubeId: z.string().optional(),
    youtubeId2: z.string().optional(),
    youtubeIds: z.array(z.string()).optional(),
    image: image().optional(),
    order: z.number().optional(),
    date: z.string().or(z.date()).optional(),
  })
});

const tags = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/tags" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image().optional(),
  })
});

const stories = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/stories" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    youtubeId: z.string().optional(),
    image: image().optional(),
  })
});

export const collections = { main, tags, stories };
