import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '최형욱 블로그 | WOOKHYUNG.',
    short_name: '최형욱 블로그 | WOOKHYUNG.',
    description:
      'A personal collection of thoughts—some about code, some about everything else.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f3f4f6',
    theme_color: '#f3f4f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  };
}
