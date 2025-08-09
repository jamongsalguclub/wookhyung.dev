import type { Metadata } from 'next';

import { siteConfig } from '@/shared/config/site';
import { PageTitle } from '@/shared/ui/page-title';
import { openGraph, twitter } from '@/shared/util/seo';

export const metadata: Metadata = {
  title: 'Bookmark',
  alternates: {
    canonical: `${siteConfig.url}/bookmark`,
  },
  openGraph: openGraph({
    title: `Bookmark | ${siteConfig.siteName}`,
  }),
  twitter: twitter({
    title: `Bookmark | ${siteConfig.siteName}`,
  }),
};

const BOOKMARKS = {
  Web: [
    {
      title: 'HYPERMEDIA SYSTEMS',
      url: 'https://hypermedia.systems/',
    },
  ],
  'Front-end': [
    {
      title: '(번역) 프런트엔드의 미래 탐색하기',
      url: 'https://ykss.netlify.app/translation/navigating_the_future_of_frontend',
    },
    {
      title: '요구사항의 변화로 알아가는 클린코드',
      url: 'https://junilhwang.github.io/TIL/clean-code/as-requirements-change/',
    },
  ],
  React: [
    {
      title: 'React에서 중복호출(aka. 따닥)을 막는 완벽한 방법',
      url: 'https://happysisyphe.tistory.com/m/72',
    },
    {
      title: "리액트에서 key에 index를 넣으면 안 되는 '진짜' 이유",
      url: 'https://yozm.wishket.com/magazine/detail/2634',
    },
    {
      title: 'Merging Remix and React Router',
      url: 'https://remix.run/blog/merging-remix-and-react-router',
    },
    {
      title: 'The Beauty of TanStack Router',
      url: 'https://tkdodo.eu/blog/the-beauty-of-tan-stack-router',
    },
  ],
  TypeScript: [
    {
      title: 'TypeScript Style Guide',
      url: 'https://mkosir.github.io/typescript-style-guide/#introduction',
    },
    {
      title: 'TypeScript Deep Dive',
      url: 'https://basarat.gitbook.io/typescript/',
    },
    {
      title: 'How To Strongly Type process.env',
      url: 'https://www.totaltypescript.com/how-to-strongly-type-process-env',
    },
    {
      title:
        'satisfies: 안전한 업캐스팅을 통해 더 안전한 코드작성을 도와주는 새로운 키워드(TypeScript 4.9)',
      url: 'https://engineering.ab180.co/stories/satisfies-safe-upcasting',
    },
  ],
  'Node.js': [
    {
      title:
        'Node.js가 싱글스레드 서버라는 미신(feat. Node.js의 대용량 데이터 처리)',
      url: 'https://medium.com/naverfinancial/node-js가-싱글스레드-서버라는-미신-feat-node-js의-대용량-데이터-처리-cf1d651290be',
    },
  ],
  Cursor: [
    {
      title: '토스 프론트엔드 가이드라인 기반으로 만든 Cursor rule',
      url: 'https://gist.github.com/toy-crane/dde6258997519d954063a536fc72d055',
    },
    {
      title: 'Cursor를 더 똑똑하게 사용하고 싶은 분들을 위한 팁 12개',
      url: 'https://news.hada.io/topic?id=21608',
    },
  ],
  SWE: [
    {
      title: '"개발자가 대체된다"는 유행은 왜 반복될까?',
      url: 'https://news.hada.io/topic?id=21150',
    },
  ],
};

export default function BookmarkPage() {
  return (
    <div className="pb-12 space-y-8">
      <PageTitle title="Bookmark" />

      {Object.entries(BOOKMARKS).map(([category, bookmarks]) => (
        <section key={category}>
          <h2 className="text-xl font-bold text-gray-900 mb-4">{category}</h2>
          <ul className="list-disc ml-6 space-y-2">
            {bookmarks.map((bookmark) => (
              <li key={bookmark.url} className="text-gray-700">
                <a
                  href={bookmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  {bookmark.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
