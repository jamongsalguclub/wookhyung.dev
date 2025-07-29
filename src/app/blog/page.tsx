import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';

export default function Page() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      {sortedPosts.map((post) => (
        <Link
          href={`/blog/${post.slug}`}
          className="border-b border-gray-200 py-3 px-2 hover:bg-gray-50 flex flex-col gap-2"
          key={post._id}
        >
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className="text-sm text-gray-500 mb-2">
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
