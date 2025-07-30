import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getMDXComponent } from 'next-contentlayer2/hooks';

import { Comments } from './ui/comments';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = async ({ params }: BlogPostProps) => {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  return {
    title: post.title,
    description: post.summary,
  };
};

export default async function Page({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    notFound();
  }

  const Content = getMDXComponent(post.body.code);

  return (
    <div className="flex flex-col gap-6">
      <article className="py-6 prose max-w-none break-words">
        <h1>{post.title}</h1>
        <hr />
        <Content
          components={{
            Image,
          }}
        />
      </article>
      <Comments />
    </div>
  );
}
