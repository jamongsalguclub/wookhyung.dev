import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import serialize from 'serialize-javascript';

import { siteConfig } from '@/shared/config/site';
import { DottedDivider } from '@/shared/ui/dotted-divider';
import { PageTitle } from '@/shared/ui/page-title';
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
  alternates: {
    canonical: `${siteConfig.url}/tech`,
  },
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
        <PageTitle title="Tech" />

        <div>
          {techPosts.map((post, index) => (
            <div key={post._id}>
              <Link
                href={`/tech/${post.slug}`}
                className="py-3 px-2 hover:bg-gray-200 flex flex-col gap-2 transition-colors"
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
              {index < techPosts.length - 1 && <DottedDivider />}
            </div>
          ))}
        </div>

        <div className="mt-6 text-end">
          <a
            href="https://velog.io/@ctdlog/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline inline-flex items-center gap-1 text-sm"
          >
            이전 블로그 보기
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(jsonLd) }}
      />
    </>
  );
}
