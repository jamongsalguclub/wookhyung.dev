import type { Metadata } from 'next';
import Link from 'next/link';
import serialize from 'serialize-javascript';

import { siteConfig } from '@/shared/config/site';
import { techPosts } from '@/shared/util/post';
import { openGraph, twitter } from '@/shared/util/seo';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Tech',
  name: 'Tech',
  url: `${siteConfig.url}/tech`,
  author: {
    '@type': 'Person',
    name: siteConfig.author.name,
  },
};

export const metadata: Metadata = {
  title: 'Tech',
  openGraph: openGraph({
    title: `Tech | ${siteConfig.siteName}`,
  }),
  twitter: twitter({
    title: `Tech | ${siteConfig.siteName}`,
  }),
};

export default function Page() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Tech</h1>

        <div className="space-y-1">
          {techPosts.map((post) => (
            <Link
              href={`/tech/${post.slug}`}
              className="border-b border-gray-200 py-3 px-2 hover:bg-gray-200 flex flex-col gap-2 transition-colors"
              key={post._id}
            >
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{post.summary}</p>
              <p className="text-xs text-gray-500">
                {new Date(post.date).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(jsonLd) }}
      />
    </>
  );
}
