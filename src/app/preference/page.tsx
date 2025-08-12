import type { Metadata } from 'next';

import {
  BOOKS_BY_YEAR,
  CONCERTS,
  INTERESTS,
  PLAYLISTS,
} from '@/app/preference/const/preference';
import { siteConfig } from '@/shared/config/site';
import { PageTitle } from '@/shared/ui/page-title';
import { openGraph, twitter } from '@/shared/util/seo';

export const metadata: Metadata = {
  title: 'Preference',
  alternates: {
    canonical: `${siteConfig.url}/preference`,
  },
  openGraph: openGraph({
    title: `Preference | ${siteConfig.siteName}`,
  }),
  twitter: twitter({
    title: `Preference | ${siteConfig.siteName}`,
  }),
};

export default function PreferencePage() {
  return (
    <div className="pb-12 space-y-8">
      <PageTitle title="Preference" />

      <section>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Music</h2>
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            Playlist
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
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            Concert
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
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Book</h2>
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
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Movie</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li className="text-gray-700">...</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Interest</h2>
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
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
