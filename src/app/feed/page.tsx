import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

import { siteConfig } from '@/shared/config/site';
import { DottedCard } from '@/shared/ui/dotted-card';
import { PageTitle } from '@/shared/ui/page-title';
import { openGraph, twitter } from '@/shared/util/seo';

import { RSS_FEEDS } from './config/rss-feeds';
import { parseAllRssFeeds } from './model/rss-parser';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Feed',
  alternates: {
    canonical: `${siteConfig.url}/feed`,
  },
  openGraph: openGraph({
    title: `Feed | ${siteConfig.siteName}`,
  }),
  twitter: twitter({
    title: `Feed | ${siteConfig.siteName}`,
  }),
};

export default async function FeedPage() {
  const rssItems = await parseAllRssFeeds(RSS_FEEDS);

  return (
    <div>
      <PageTitle title="Feed (Beta ⚠️)" />

      <div className="space-y-6">
        {rssItems.map((item, index) => (
          <DottedCard
            key={`${item.feedUrl}-${index}`}
            className="hover:shadow-md transition-shadow"
            contentClassName="p-6"
          >
            <article>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-sm text-blue-600">
                    {item.feedName}
                  </span>
                </div>
                <time className="text-sm text-gray-500">
                  {format(new Date(item.pubDate), 'yyyy년 MM월 dd일', {
                    locale: ko,
                  })}
                </time>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </a>
              </h3>
              {item.contentSnippet && (
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {item.contentSnippet}
                </p>
              )}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:underline"
              >
                전체 글 읽기 <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </article>
          </DottedCard>
        ))}
      </div>
    </div>
  );
}
