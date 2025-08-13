import type { Metadata } from 'next';

import { siteConfig } from '@/shared/config/site';
import { PageTitle } from '@/shared/ui/page-title';
import { openGraph, twitter } from '@/shared/util/seo';

import { BOOK_STUDY_GROUPS } from './const/study';

export const metadata: Metadata = {
  title: 'Study',
  alternates: {
    canonical: `${siteConfig.url}/study`,
  },
  openGraph: openGraph({
    title: `Study | ${siteConfig.siteName}`,
  }),
  twitter: twitter({
    title: `Study | ${siteConfig.siteName}`,
  }),
};

export default function StudyPage() {
  return (
    <div className="pb-12 space-y-8">
      <PageTitle title="Study" />

      <section>
        <h2 className="text-xl font-bold text -gray-900 mb-4">Book</h2>
        {BOOK_STUDY_GROUPS.map((group) => (
          <div key={group.title} className="mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-4">
              {group.link ? (
                <a
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {group.title}
                </a>
              ) : (
                group.title
              )}
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              {group.items.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {typeof item === 'string' ? (
                    item
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
