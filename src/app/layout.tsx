import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import serialize from 'serialize-javascript';

import { Header } from '@/shared/ui/header';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    template: '%s | WOOKHYUNG.',
    default: '최형욱 블로그 | WOOKHYUNG.',
  },
  description: 'Do you remember?',
  openGraph: {
    title: {
      template: '%s | WOOKHYUNG.',
      default: '최형욱 블로그 | WOOKHYUNG.',
    },
    description: 'Do you remember?',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s | WOOKHYUNG.',
      default: '최형욱 블로그 | WOOKHYUNG.',
    },
    description: 'Do you remember?',
    images: ['/wookhyung.png'],
  },
  authors: [{ name: 'wookhyung', url: 'https://wookhyung.dev' }],
  keywords: ['wookhyung', 'wookhyung.dev', 'blog', 'frontend', 'developer'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://wookhyung.dev',
    types: {
      'application/rss+xml': 'https://wookhyung.dev/rss.xml',
    },
  },
  other: {
    'naver-site-verification': 'b0cbc49b310075ca17a6a6868dd4a9ed0ee4b99d',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '최형욱 블로그 | WOOKHYUNG.',
  url: 'https://wookhyung.dev',
  description: 'Do you remember?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-mono max-w-4xl mx-auto py-6 px-4 min-h-dvh flex flex-col bg-gray-100">
        <Providers>
          <Header />
          {children}
          <Analytics />
          <GoogleAnalytics gaId="G-F7VQE719RE" />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(jsonLd) }}
        />
      </body>
    </html>
  );
}
