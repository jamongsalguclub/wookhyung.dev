import type { MetadataRoute } from 'next';

import { siteConfig } from '@/shared/config/site';
import {
  notesPosts as notesPostsData,
  techPosts as techPostsData,
} from '@/shared/util/post';

export default function sitemap(): MetadataRoute.Sitemap {
  const techPosts = techPostsData.map((post) => ({
    url: `${siteConfig.url}/tech/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  const notesPosts = notesPostsData.map((post) => ({
    url: `${siteConfig.url}/notes/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/tech`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...techPosts,
    ...notesPosts,
  ];
}
