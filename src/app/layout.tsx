import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import serialize from 'serialize-javascript';

import { Header } from '@/shared/ui/header';
import { openGraph, twitter } from '@/shared/util/seo';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    template: '%s | WOOKHYUNG.',
    default: '최형욱 블로그 | WOOKHYUNG.',
  },
  description: 'Do you remember?',
  openGraph: openGraph({
    title: '최형욱 블로그 | WOOKHYUNG.',
    description: 'Do you remember?',
  }),
  twitter: twitter({
    title: '최형욱 블로그 | WOOKHYUNG.',
    description: 'Do you remember?',
  }),
  authors: [{ name: 'wookhyung', url: 'https://wookhyung.dev' }],
  keywords: ['wookhyung', 'wookhyung.dev', 'blog', 'frontend', 'developer'],
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
      },
    ],
  },
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

const pretendard = localFont({
  src: '../shared/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable} suppressHydrationWarning>
      <body
        className={`font-mono max-w-3xl mx-auto py-6 px-4 min-h-dvh flex flex-col bg-gray-100`}
      >
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
