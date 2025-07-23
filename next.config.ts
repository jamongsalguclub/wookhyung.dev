import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';

const nextConfig: NextConfig = {
  transpilePackages: ['mdx-bundler'],
};

export default withContentlayer(nextConfig);
