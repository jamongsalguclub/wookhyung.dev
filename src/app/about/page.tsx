import { RssIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

import { siteConfig } from '@/shared/config/site';
import { EmailIcon } from '@/shared/icon/email-icon';
import { GithubIcon } from '@/shared/icon/github-icon';
import { openGraph, twitter } from '@/shared/util/seo';

export const metadata: Metadata = {
  title: 'About',
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: openGraph({
    title: `About | ${siteConfig.siteName}`,
  }),
  twitter: twitter({
    title: `About | ${siteConfig.siteName}`,
  }),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="flex flex-col items-center text-center pb-16">
        <div className="relative rounded-full overflow-hidden border-2 border-gray-300 mb-6">
          <Image
            src="/wookhyung.png"
            width={128}
            height={128}
            alt="Wookhyung Profile"
          />
        </div>

        <div className="space-y-2 mb-4">
          <h1 className="text-3xl font-bold text-gray-900">최형욱</h1>
          <p className="text-xl text-gray-600">WOOKHYUNG</p>
        </div>

        <div className="flex space-x-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${siteConfig.social.email}`}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
            aria-label="Email"
          >
            <EmailIcon className="w-6 h-6 text-gray-700" />
          </a>
          <a
            href={siteConfig.feeds.rss}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
            aria-label="RSS"
          >
            <RssIcon className="w-6 h-6 text-gray-700" />
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Experience</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li className="text-gray-700">프론트엔드 개발자 (22.12 - 현재)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tech Stack</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li className="text-gray-700">
              TypeScript, React, TanStack Router(Start), Next.js
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Open Source Contribution
          </h2>
          <h3 className="text-base font-bold text-gray-900 mb-4">
            <a
              href="https://github.com/TanStack/router"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              TanStack Router(Start)
            </a>
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            {[
              {
                title: 'make head function scripts load properly',
                link: 'https://github.com/TanStack/router/pull/4323',
              },
              {
                title: 'support SSR for non-Latin character route paths',
                link: 'https://github.com/TanStack/router/pull/4611',
              },
              {
                title: 'properly merge middleware context objects',
                link: 'https://github.com/TanStack/router/pull/4665',
              },
              {
                title: 'reset statusCode to 200 on navigation start',
                link: 'https://github.com/TanStack/router/pull/4664',
              },
            ].map(({ title, link }) => (
              <li key={title} className="text-gray-700">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Project</h2>
          <ul className="list-disc ml-6 space-y-2">
            {[
              {
                title: 'wookhyung.dev',
                link: 'https://github.com/jamongsalguclub/wookhyung.dev',
                description: '개인 블로그, 25.07 - 현재',
              },
              {
                title: 'Google Chat Webhook Action',
                link: 'https://github.com/jamongsalguclub/google-chat-webhook-action',
                description: 'GitHub Action for Google Chat, 25.06 - 25.07',
              },
              {
                title: 'nowoo',
                link: 'https://github.com/thoupe/nowoo',
                description: '메이플랜드 아이템 검색 사이트, 24.01 - 24.02',
              },
            ].map(({ title, link, description }) => (
              <li key={title} className="text-gray-700 space-x-2">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {title}
                </a>
                <span className="text-gray-700">({description})</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li className="text-gray-700">
              방송통신대학교 컴퓨터과학과 (25년 2학기 입학 예정)
            </li>
            <li className="text-gray-700">
              엘리스 SW 엔지니어 트랙 (22.04 - 22.07)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
          <ul className="mt-2 space-y-1 list-disc ml-6">
            <li>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub: {siteConfig.author.name}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="text-blue-600 hover:underline"
              >
                Email: {siteConfig.social.email}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
