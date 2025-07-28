import './globals.css';

import type { Metadata } from 'next';

import { Header } from '@/shared/ui/header';

export const metadata: Metadata = {
  title: 'WOOKHYUNG.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-mono max-w-2xl mx-auto py-6 px-4 min-h-dvh flex flex-col`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
