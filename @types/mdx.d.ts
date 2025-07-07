declare module '*.mdx' {
  import type { ComponentType } from 'react';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MDXComponent: ComponentType<any>;
  export default MDXComponent;

  export const frontMatter: {
    title: string;
    date: string;
    description?: string;
    tags?: string[];
  };
}
