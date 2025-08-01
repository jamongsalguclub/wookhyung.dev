export const siteConfig = {
  name: 'wookhyung.dev',
  siteName: 'WOOKHYUNG.',
  url: 'https://wookhyung.dev',
  title: {
    default: '최형욱 블로그 | WOOKHYUNG.',
    template: '%s | WOOKHYUNG.',
  },
  description:
    'A personal collection of thoughts—some about code, some about everything else.',
  author: {
    name: 'wookhyung',
    url: 'https://wookhyung.dev',
    email: 'qpflapffhs76@gmail.com',
  },
  keywords: ['wookhyung', 'wookhyung.dev', 'blog', 'frontend', 'developer'],
  language: 'ko',
  locale: 'ko_KR',
  images: {
    opengraph: '/opengraph-image.png',
    logo: '/wookhyung.png',
  },
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
      },
    ],
    manifest: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  theme: {
    color: '#f3f4f6',
    background: '#f3f4f6',
  },
  verification: {
    naver: 'b0cbc49b310075ca17a6a6868dd4a9ed0ee4b99d',
  },
  feeds: {
    rss: '/rss.xml',
  },
  github: {
    repo: 'wookhyungx/wookhyung.',
    repoId: 'R_kgDOPIIAEQ',
    category: 'Comments',
    categoryId: 'DIC_kwDOPIIAEc4CtkB_',
  },
  social: {
    github: 'https://github.com/wookhyungx',
    email: 'qpflapffhs76@gmail.com',
  },
};
