'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { GithubIcon } from '@/shared/icon/github-icon';
import { cn } from '@/shared/lib/tailwind-merge';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="mb-4">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors"
        >
          <Image src="/wookhyung.png" alt="wookhyung" width={40} height={40} />
        </Link>

        <div className="flex items-center space-x-8">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + '/');

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors text-gray-800 hover:text-gray-900',
                  isActive &&
                    'underline underline-offset-4 decoration-gray-800 decoration-2',
                )}
              >
                {item.name}
              </Link>
            );
          })}
          <a
            className="text-gray-600 hover:text-gray-900 size-6"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/w00khyung"
          >
            <GithubIcon className="size-6" />
          </a>
        </div>
      </nav>
    </header>
  );
}
