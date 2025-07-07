import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';

import { getAllPosts } from '~/shared/utils/mdx';

export const PostsPage = () => {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getAllPosts(),
  });

  if (isLoading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="text-center">로딩 중...</div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold">블로그 포스트</h1>
        <div className="text-center text-gray-600">
          <p>아직 작성된 포스트가 없습니다.</p>
          <p className="mt-2">content 폴더에 .mdx 파일을 추가해보세요!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">블로그 포스트</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-6">
            <Link
              to="/posts/$title"
              params={{ title: post.slug }}
              className="block rounded-lg p-4 transition-colors hover:bg-gray-50"
            >
              <h2 className="mb-2 text-2xl text-blue-600 font-semibold hover:text-blue-800">
                {post.title}
              </h2>
              <div className="mb-2 text-gray-600">
                {new Date(post.date).toLocaleDateString('ko-KR')}
              </div>
              {post.description && (
                <p className="mb-3 text-gray-700">{post.description}</p>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};
