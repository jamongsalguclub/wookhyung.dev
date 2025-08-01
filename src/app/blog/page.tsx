import type { Metadata } from 'next';
import Link from 'next/link';
import serialize from 'serialize-javascript';

import { siteConfig } from '@/shared/config/site';
import { allPosts } from '@/shared/util/post';
import { openGraph, twitter } from '@/shared/util/seo';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog',
  url: `${siteConfig.url}/blog`,
  author: {
    '@type': 'Person',
    name: siteConfig.author.name,
  },
};

export const metadata: Metadata = {
  title: 'Blog',
  openGraph: openGraph({
    title: `Blog | ${siteConfig.siteName}`,
  }),
  twitter: twitter({
    title: `Blog | ${siteConfig.siteName}`,
  }),
};

export default function Page() {
  return (
    <>
      {allPosts.map((post) => (
        <Link
          href={`/blog/${post.slug}`}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(jsonLd) }}
      />
    </>
  );
}
