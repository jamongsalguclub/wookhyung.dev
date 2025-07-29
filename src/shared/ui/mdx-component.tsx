'use client';

import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer2/hooks';

import { CustomLink } from './link';

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <Component
      components={{
        Image,
        a: CustomLink,
      }}
    />
  );
}
