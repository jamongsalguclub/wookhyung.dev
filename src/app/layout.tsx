import './globals.css';

import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import { Header } from '@/shared/ui/header';

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'wookhyung',
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
