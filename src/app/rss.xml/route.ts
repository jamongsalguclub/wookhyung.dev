import RSS from 'rss';

import { allPosts } from '@/shared/util/post';

export async function GET() {
  const feed = new RSS({
    title: 'wookhyung.dev',
    description: 'wookhyung.dev',
    site_url: 'https://wookhyung.dev',
    feed_url: 'https://wookhyung.dev/rss.xml',
    language: 'ko',
    pubDate: new Date(),
  });

  for (const post of allPosts) {
    feed.item({
      title: post.title,
      description: post.summary,
      url: `https://wookhyung.dev/blog/${post.slug}`,
      date: post.date,
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
