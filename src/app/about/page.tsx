import type { Metadata } from 'next';
import Image from 'next/image';

import { EmailIcon } from '@/shared/icon/email-icon';
import { GithubIcon } from '@/shared/icon/github-icon';
import { openGraph, twitter } from '@/shared/util/seo';

export const metadata: Metadata = {
  title: 'About | WOOKHYUNG.',
  description: 'About',
  openGraph: openGraph({
    title: 'About | WOOKHYUNG.',
  }),
  twitter: twitter({
    title: 'About | WOOKHYUNG.',
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
            href="https://github.com/wookhyungx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href="mailto:qpflapffhs76@gmail.com"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
            aria-label="Email"
          >
            <EmailIcon className="w-6 h-6 text-gray-700" />
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Experience</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li className="text-gray-700">
              Frontend Engineer (2022.12 - current)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li className="text-gray-700">TypeScript, React, Next.js</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            OSS Contributions
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
            <li className="text-gray-700">
              <a
                href="https://github.com/TanStack/router/pull/4323"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                make head function scripts load properly
              </a>
            </li>
            <li className="text-gray-700">
              <a
                href="https://github.com/TanStack/router/pull/4611"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                support SSR for non-Latin character route paths
              </a>
            </li>
            <li className="text-gray-700">
              <a
                href="https://github.com/TanStack/router/pull/4665"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                properly merge middleware context objects
              </a>
            </li>
            <li className="text-gray-700">
              <a
                href="https://github.com/TanStack/router/pull/4664"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                reset statusCode to 200 on navigation start
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Projects</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li className="text-gray-700 space-x-2">
              <a
                href="https://github.com/wookhyungx/wookhyung.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                wookhyung.dev
              </a>
              <span className="text-gray-700">
                (Personal Blog, 2025.07 - current)
              </span>
            </li>
            <li className="text-gray-700 space-x-2">
              <a
                href="https://github.com/wookhyungx/google-chat-webhook-action"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Google Chat Webhook Action
              </a>
              <span className="text-gray-700">
                (GitHub Action for Google Chat, 2025.06)
              </span>
            </li>
            <li className="text-gray-700 space-x-2">
              <a
                href="https://github.com/thoupe/nowoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                nowoo
              </a>
              <span className="text-gray-700">
                (Mapleland Search, 24.01 - 24.02)
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li className="text-gray-700">
              Bachelor of International Commerce, KMOU (2016.03 - 2022.02)
            </li>
            <li className="text-gray-700">KDT Bootcamp, Elice (2022)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Contacts</h2>
          <ul className="mt-2 space-y-1 list-disc ml-6">
            <li>
              <a
                href="https://github.com/wookhyungx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub: wookhyungx
              </a>
            </li>
            <li>
              <a
                href="mailto:qpflapffhs76@gmail.com"
                className="text-blue-600 hover:underline"
              >
                Email: qpflapffhs76@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
