import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    published: z.boolean().default(true),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    headerImg: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
