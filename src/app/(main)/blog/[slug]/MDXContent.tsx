'use client';

import { MDXComponents } from 'mdx/types';
import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import { useMemo } from 'react';

const components = {
  img: Image,
} as unknown as MDXComponents;

export interface PostContentProps {
  code: string;
}

const MDXContent: React.FC<PostContentProps> = ({ code }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component components={components} />;
};

export default MDXContent;
