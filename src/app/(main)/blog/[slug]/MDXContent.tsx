'use client';

import { MDXComponents } from 'mdx/types';
import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import { PropsWithChildren, useMemo } from 'react';

import CodeBlock from '@/components/CodeBlock';

const components = {
  img: Image,
  pre: ({ children }: PropsWithChildren) => {
    const { className, children: code } = (
      children?.valueOf() as Record<string, unknown>
    ).props as { className: string; children: string };
    return <CodeBlock lang={className.replace('language-', '')} code={code} />;
  },
} as unknown as MDXComponents;

export interface PostContentProps {
  code: string;
}

const MDXContent: React.FC<PostContentProps> = ({ code }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component components={components} />;
};

export default MDXContent;
