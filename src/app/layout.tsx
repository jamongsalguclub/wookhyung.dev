import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

import { Header } from '@/shared/ui/header';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    template: '%s | WOOKHYUNG.',
    default: 'WOOKHYUNG.',
  },
  description: 'Do you remember?',
  openGraph: {
    title: 'WOOKHYUNG.',
    description: 'Do you remember?',
    siteName: 'WOOKHYUNG.',
    url: 'https://wookhyung.dev',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/wookhyung.png',
        width: 1200,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WOOKHYUNG.',
    description: 'Do you remember?',
    images: ['/wookhyung.png'],
  },
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
      </body>
    </html>
  );
}
