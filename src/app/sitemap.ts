import type { MetadataRoute } from 'next';

import { allPosts } from '@/shared/util/post';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `https://wookhyung.dev/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://wookhyung.dev',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://wookhyung.dev/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://wookhyung.dev/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...posts,
  ];
}
