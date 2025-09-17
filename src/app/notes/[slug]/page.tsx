import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getMDXComponent } from 'next-contentlayer2/hooks';
import serialize from 'serialize-javascript';

import { siteConfig } from '@/shared/config/site';
import { BackButton } from '@/shared/ui/back-button';
import { notesPosts } from '@/shared/util/post';
import { openGraph, twitter } from '@/shared/util/seo';

import { Comments } from './ui/comments';
import ProgressBar from './ui/progress-bar';
import ScrollToTop from './ui/scroll-to-top';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = () =>
  notesPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;
  const post = notesPosts.find((post) => post.slug === slug);

  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `${siteConfig.url}/notes/${slug}`,
    },
    openGraph: openGraph({
      title: post.title,
    }),
    twitter: twitter({
      title: post.title,
    }),
  };
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = notesPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    url: `${siteConfig.url}/notes/${slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/notes/${slug}`,
    },
  };

  const Content = getMDXComponent(post.body.code);

  return (
    <>
      <div className="flex flex-col gap-6 pb-40">
        <ProgressBar />
        <BackButton className="self-start" />
        <article className="py-6 prose max-w-none break-words">
          <h1>{post.title}</h1>
          <div className="flex items-center gap-2 mt-2 mb-4 not-prose">
            <time
              dateTime={post.date}
              className="text-sm text-gray-500 font-medium"
            >
              {format(new Date(post.date), 'yyyy년 M월 d일', { locale: ko })}
            </time>
          </div>
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
