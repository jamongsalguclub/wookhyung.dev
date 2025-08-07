import type { Metadata } from 'next';

import { siteConfig } from '@/shared/config/site';
import { openGraph, twitter } from '@/shared/util/seo';

export const BOOKMARKS = [
  {
    title: '모던 자바스크립트 Deep Dive',
    link: 'https://www.yes24.com/Product/Goods/124855097',
  },
];

export const metadata: Metadata = {
  title: 'Bookmark',
  alternates: {
    canonical: `${siteConfig.url}/bookmark`,
  },
  openGraph: openGraph({
    title: `Bookmark | ${siteConfig.siteName}`,
  }),
  twitter: twitter({
    title: `Bookmark | ${siteConfig.siteName}`,
  }),
};

export default function BookmarkPage() {
  return (
    <div className="pb-12 space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Bookmark</h1>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Web</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li className="text-gray-700">
            <a
              href="https://hypermedia.systems/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              HYPERMEDIA SYSTEMS
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
