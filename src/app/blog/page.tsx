import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function Page() {
  const posts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((post) => !post.draft);

  return (
    <>
      {posts.map((post) => (
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
    </>
  );
}
