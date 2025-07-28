'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Resume', href: '/resume' },
  { name: 'Portfolio', href: '/portfolio' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="mb-4">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors"
        >
          <Image src="/wookhyung.jpeg" alt="wookhyung" width={40} height={40} />
        </Link>

        <div className="flex items-center space-x-8">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + '/');

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
