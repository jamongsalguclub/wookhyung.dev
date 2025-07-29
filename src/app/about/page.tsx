import type { Metadata } from 'next';
import Image from 'next/image';

import { EmailIcon } from '@/shared/icon/email-icon';
import { GithubIcon } from '@/shared/icon/github-icon';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-12">
      <div className="flex flex-col items-center space-y-6 text-center">
        <div className="relative rounded-full overflow-hidden border-2 border-gray-300">
          <Image
            src="/wookhyung.png"
            width={128}
            height={128}
            alt="Wookhyung Profile"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">최형욱</h1>
          <p className="text-xl text-gray-600">WOOKHYUNG</p>
        </div>

        <p className="text-base text-gray-600 max-w-md leading-relaxed">
          Frontend Engineer
        </p>

        <div className="flex space-x-4 pt-4">
          <a
            href="https://github.com/w00khyung"
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
    </div>
  );
}
