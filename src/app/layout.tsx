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
    siteName: 'WOOKHYUNG.',
    url: 'https://wookhyung.dev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono max-w-2xl mx-auto py-6 px-4 min-h-dvh flex flex-col bg-gray-100">
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
