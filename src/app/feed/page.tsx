import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import type { Metadata } from 'next';

import { siteConfig } from '@/shared/config/site';
import { DottedDivider } from '@/shared/ui/dotted-divider';
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

      <div>
        {rssItems.map((item, index) => (
          <div key={`${item.feedUrl}-${index}`}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-2 hover:bg-gray-200 flex flex-col gap-2 transition-colors"
            >
              <div className="flex items-start justify-between">
                <h2 className="font-bold flex-1">{item.title}</h2>
                <span className="font-medium text-sm text-blue-600 ml-2 shrink-0">
                  {item.feedName}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                {format(new Date(item.pubDate), 'yyyy년 MM월 dd일', {
                  locale: ko,
                })}
              </p>
            </a>
            {index < rssItems.length - 1 && <DottedDivider />}
          </div>
        ))}
      </div>
    </div>
  );
}
