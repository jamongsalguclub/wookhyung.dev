import * as fs from 'node:fs';
import * as path from 'node:path';

import { createServerFn } from '@tanstack/react-start';
import matter from 'gray-matter';

export interface PostMetadata {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  slug: string;
  content?: string;
}

// 서버에서만 실행되는 함수들
export const getAllPosts = createServerFn({
  method: 'GET',
}).handler(async (): Promise<PostMetadata[]> => {
  // public/content 폴더로 경로 변경
  const contentDir = path.join(process.cwd(), 'public', 'content');

  try {
    const files = await fs.promises.readdir(contentDir);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    const posts: PostMetadata[] = [];

    for (const file of mdxFiles) {
      const filePath = path.join(contentDir, file);
      const content = await fs.promises.readFile(filePath, 'utf-8');
      const { data } = matter(content);

      const slug = file.replace('.mdx', '');

      posts.push({
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString().split('T')[0],
        description: data.description,
        tags: data.tags || [],
        slug,
      });
    }

    // 날짜 기준으로 내림차순 정렬
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
});

export const getPostBySlug = createServerFn({
  method: 'POST',
})
  .validator((slug: string) => {
    if (typeof slug !== 'string') {
      throw new Error('Slug must be a string');
    }
    return slug;
  })
  .handler(async ({ data: slug }): Promise<PostMetadata | null> => {
    const contentDir = path.join(process.cwd(), 'public', 'content');
    const filePath = path.join(contentDir, `${slug}.mdx`);

    try {
      const content = await fs.promises.readFile(filePath, 'utf-8');
      const { data } = matter(content);

      return {
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString().split('T')[0],
        description: data.description,
        tags: data.tags || [],
        slug,
      };
    } catch (error) {
      console.error(`Error reading post ${slug}:`, error);
      return null;
    }
  });

export const getPostContent = createServerFn({
  method: 'POST',
})
  .validator((slug: string) => {
    if (typeof slug !== 'string') {
      throw new Error('Slug must be a string');
    }
    return slug;
  })
  .handler(async ({ data: slug }): Promise<string | null> => {
    const contentDir = path.join(process.cwd(), 'public', 'content');
    const filePath = path.join(contentDir, `${slug}.mdx`);

    try {
      const content = await fs.promises.readFile(filePath, 'utf-8');
      const { content: markdownContent } = matter(content);
      return markdownContent;
    } catch (error) {
      console.error(`Error reading post content ${slug}:`, error);
      return null;
    }
  });
