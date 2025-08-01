import type { MetadataRoute } from 'next';

import { siteConfig } from '@/shared/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title.default,
    short_name: siteConfig.siteName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: siteConfig.theme.background,
    theme_color: siteConfig.theme.color,
    icons: siteConfig.icons.manifest,
  };
}
