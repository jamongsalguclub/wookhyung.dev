import { evaluate } from '@mdx-js/mdx';
import { useQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import * as runtime from 'react/jsx-runtime';

import { getPostBySlug, getPostContent } from '~/shared/utils/mdx';

export const PostsTitlePage = () => {
  const { title } = useParams({ from: '/posts/$title' });
  const [MdxComponent, setMdxComponent] = useState<React.ComponentType | null>(
    null,
  );
  const [mdxError, setMdxError] = useState<string | null>(null);

  const { data: post, isLoading: isPostLoading } = useQuery({
    queryKey: ['post', title],
    queryFn: () => getPostBySlug({ data: title }),
  });

  const { data: content, isLoading: isContentLoading } = useQuery({
    queryKey: ['post-content', title],
    queryFn: () => getPostContent({ data: title }),
    enabled: !!post,
  });

  useEffect(() => {
    if (!content) return;

    const compileMDX = async () => {
      try {
        setMdxError(null);
        setMdxComponent(null);

        const { default: MDXComponent } = await evaluate(content, {
          ...runtime,
          useMDXComponents: () => ({}),
        });

        setMdxComponent(() => MDXComponent);
      } catch (error) {
        console.error('Error compiling MDX:', error);
        setMdxError(error instanceof Error ? error.message : 'MDX 컴파일 오류');
      }
    };

    compileMDX();
  }, [content]);

  if (isPostLoading || isContentLoading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="text-center">로딩 중...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="text-center text-red-600">
          포스트를 찾을 수 없습니다.
        </div>
      </div>
    );
  }

  if (mdxError) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-lg bg-red-50 p-4">
          <h2 className="text-red-800 font-bold">MDX 컴파일 오류</h2>
          <pre className="mt-2 text-sm text-red-700">{mdxError}</pre>
        </div>
      </div>
    );
  }

  if (!MdxComponent) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="text-center">MDX 컴파일 중...</div>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
        <div className="mb-4 text-gray-600">
          {new Date(post.date).toLocaleDateString('ko-KR')}
        </div>
        {post.description && (
          <p className="mb-4 text-lg text-gray-700">{post.description}</p>
        )}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-6 flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-lg max-w-none">
        {MdxComponent && <MdxComponent />}
      </div>
    </article>
  );
};
