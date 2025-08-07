import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import serialize from 'serialize-javascript';

import { siteConfig } from '@/shared/config/site';
import { Header } from '@/shared/ui/header';
import { openGraph, twitter } from '@/shared/util/seo';

import { Providers } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: openGraph({
    title: siteConfig.title.default,
    description: siteConfig.description,
  }),
  twitter: twitter({
    title: siteConfig.title.default,
    description: siteConfig.description,
  }),
  authors: [siteConfig.author],
  keywords: siteConfig.keywords,
  icons: siteConfig.icons,
  robots: siteConfig.robots,
  alternates: {
    canonical: siteConfig.url,
    types: {
      'application/rss+xml': `${siteConfig.url}${siteConfig.feeds.rss}`,
    },
  },
  other: {
    'naver-site-verification': siteConfig.verification.naver,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.title.default,
  url: siteConfig.url,
  description: siteConfig.description,
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
      <body className="font-pretendard max-w-3xl mx-auto min-h-dvh flex flex-col bg-gray-100">
        <Providers>
          <Header />
          <main className="flex-1 flex flex-col py-6 px-4">{children}</main>
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
