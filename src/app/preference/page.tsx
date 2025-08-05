import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

import { siteConfig } from '@/shared/config/site';
import {
  BOOKS_BY_YEAR,
  CONCERTS,
  INTERESTS,
  PLAYLISTS,
} from '@/shared/const/preference';
import { openGraph, twitter } from '@/shared/util/seo';

export const metadata: Metadata = {
  title: 'Preference',
  openGraph: openGraph({
    title: `Preference | ${siteConfig.siteName}`,
  }),
  twitter: twitter({
    title: `Preference | ${siteConfig.siteName}`,
  }),
};

export default function PreferencePage() {
  return (
    <div className="min-h-screen font-pretendard pb-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">취향</h1>
        </div>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">음악</h2>
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              플레이리스트
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              {PLAYLISTS.map((playlist) => (
                <li className="text-gray-700" key={playlist.title}>
                  <a
                    href={playlist.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    {playlist.title}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              콘서트
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              {CONCERTS.map((concert) => (
                <li className="text-gray-700" key={concert.title}>
                  <a
                    href={concert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    {concert.title}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">책</h2>
          {Object.entries(BOOKS_BY_YEAR)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, books]) => (
              <div key={year} className="mb-6">
                <h3 className="text-base font-semibold text-gray-900 mb-4">
                  {year}
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  {books.map((book) => (
                    <li className="text-gray-700" key={book.title}>
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline inline-flex items-center gap-1"
                      >
                        {book.title} ({book.author})
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">영화</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li className="text-gray-700">...</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">관심사</h2>
          <ul className="list-disc ml-6 space-y-2">
            {INTERESTS.map((interest) => (
              <li className="text-gray-700" key={interest.title}>
                {interest.title}
                {interest.link && interest.linkText && (
                  <>
                    {' '}
                    <a
                      href={interest.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-1"
                    >
                      {interest.linkText}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
