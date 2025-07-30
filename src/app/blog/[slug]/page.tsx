import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getMDXComponent } from 'next-contentlayer2/hooks';
import serialize from 'serialize-javascript';

import { allPosts } from '@/shared/util/post';

import { Comments } from './ui/comments';
import ProgressBar from './ui/progress-bar';
import ScrollToTop from './ui/scroll-to-top';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = async ({
  params,
}: BlogPostProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `https://wookhyung.dev/blog/${slug}`,
    },
  };
};

export default async function Page({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    url: `https://wookhyung.dev/blog/${slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'wookhyung',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://wookhyung.dev/blog/${slug}`,
    },
  };

  const Content = getMDXComponent(post.body.code);

  return (
    <>
      <div className="flex flex-col gap-6 pb-40">
        <ProgressBar />
        <article className="py-6 prose max-w-none break-words">
          <h1>{post.title}</h1>
          {post.summary && (
            <p className="text-xl mt-0 text-slate-700">{post.summary}</p>
          )}
          <hr />
          <Content
            components={{
              Image,
            }}
          />
        </article>
        <Comments />
        <ScrollToTop />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(jsonLd) }}
      />
    </>
  );
}
