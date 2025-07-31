'use client';

import type { Variants } from 'motion/react';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { cn } from '@/shared/lib/tailwind-merge';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
] as const;

const sidebarVariants: Variants = {
  open: () => {
    const vw = typeof window !== 'undefined' ? window.innerWidth : 1000;
    const vh = typeof window !== 'undefined' ? window.innerHeight : 1000;
    const diagonal = Math.sqrt(vw * vw + vh * vh);
    return {
      clipPath: `circle(${diagonal}px at calc(100% - 40px) 40px)`,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 25,
        restDelta: 2,
      },
    };
  },
  closed: {
    clipPath: 'circle(24px at calc(100% - 40px) 40px)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 500,
      damping: 35,
    },
  },
};

const menuVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const backdropVariants: Variants = {
  open: {
    opacity: 1,
    visibility: 'visible',
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    visibility: 'hidden',
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button
    type="button"
    onClick={toggle}
    className="md:hidden p-2 text-gray-800 hover:text-gray-900 focus:outline-none relative z-50"
    aria-label="메뉴 토글"
  >
    <svg width="20" height="20" viewBox="0 0 20 20">
      <title>메뉴</title>
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 18 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 18 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 18 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

export const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="z-50 sticky top-0 bg-gray-100/80 px-4 py-3 backdrop-blur-md">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors"
          >
            <Image
              src="/wookhyung.png"
              alt="wookhyung"
              width={40}
              height={40}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

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
          </div>

          {/* Mobile Navigation Container */}
          <motion.nav
            initial={false}
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            className="md:hidden"
          >
            <MenuToggle toggle={toggleMobileMenu} />
          </motion.nav>
        </nav>
      </header>

      <motion.div
        className="md:hidden fixed inset-0 z-40"
        initial="closed"
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={backdropVariants}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsMobileMenuOpen(false);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="메뉴 닫기"
        />

        <div className="fixed top-0 left-0 right-0 h-screen">
          <motion.div
            className="absolute top-0 left-0 right-0 bg-gray-100 shadow-lg h-full"
            variants={sidebarVariants}
          />

          <div className="relative h-full">
            <div className="h-14 bg-gray-100" />

            <motion.div className="px-6 py-4 space-y-1" variants={menuVariants}>
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block px-4 py-3 text-lg font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors',
                        isActive && 'bg-gray-100 text-gray-900',
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
