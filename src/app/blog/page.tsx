import type { ResolvingMetadata } from 'next';
import Link from 'next/link';
import serialize from 'serialize-javascript';

import { allPosts } from '@/shared/util/post';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog',
  url: 'https://wookhyung.dev/blog',
  author: {
    '@type': 'Person',
    name: 'wookhyung',
  },
};

export async function generateMetadata(
  props: unknown,
  parent: ResolvingMetadata,
) {
  const parentMetadata = await parent;

  return {
    ...parentMetadata,
    openGraph: {
      ...parentMetadata.openGraph,
      title: 'Blog',
    },
    twitter: {
      ...parentMetadata.twitter,
      title: 'Blog',
    },
  };
}

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
