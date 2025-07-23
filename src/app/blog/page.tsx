import { allPosts, type Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export const metadata = {
  title: '블로그',
  description: '개발 블로그 포스트 목록',
};

export default function BlogPage() {
  // 최신 포스트 순으로 정렬
  const posts = allPosts.sort((a: Post, b: Post) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">블로그</h1>
        <p className="text-xl text-gray-700">
          개발과 관련된 이야기들을 공유합니다.
        </p>
      </header>

      <div className="space-y-8">
        {posts.map((post: Post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <Link href={post.url} className="group">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
            </Link>

            <div className="text-gray-600 mb-3">
              <time dateTime={post.date}>
                {format(parseISO(post.date), 'yyyy년 MM월 dd일')}
              </time>
            </div>

            {post.description && (
              <p className="text-gray-700 mb-4">{post.description}</p>
            )}

            <Link
              href={post.url}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              더 읽기 →
            </Link>
          </article>
        ))}

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              아직 작성된 포스트가 없습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
