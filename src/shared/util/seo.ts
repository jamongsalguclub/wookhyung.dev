import type { Metadata } from 'next';

export const openGraph = ({
  title = '최형욱 블로그 | WOOKHYUNG.',
  description = 'Do you remember?',
}: {
  title?: string;
  description?: string;
}): Metadata['openGraph'] => {
  return {
    title,
    description,
    siteName: 'WOOKHYUNG.',
    url: 'https://wookhyung.dev',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/wookhyung.png',
        width: 1200,
        height: 630,
      },
    ],
  };
};

export const twitter = ({
  title = '최형욱 블로그 | WOOKHYUNG.',
  description = 'Do you remember?',
}: {
  title?: string;
  description?: string;
}): Metadata['twitter'] => {
  return {
    card: 'summary_large_image',
    title,
    description,
    images: ['/wookhyung.png'],
  };
};
