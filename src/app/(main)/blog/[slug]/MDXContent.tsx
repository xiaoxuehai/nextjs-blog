'use client';
// import { MDXComponents } from '@mdx/types';
import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import { PropsWithChildren, useMemo } from 'react';

import CodeBlock from './CodeBlock';
export interface PostContentProps {
  code: string;
}
export type Headling = {
  text: string | null;
  level: string;
  id: string;
};
export const getHeadings = (source: string) => {
  const HEADING_REGEX = /<h[2-6](.*?)<\/h[2-6]>/g;

  if (source.match(HEADING_REGEX) && typeof window !== 'undefined') {
    return source.match(HEADING_REGEX)?.map(heading => {
      const headingEl = new DOMParser().parseFromString(heading, 'text/html')
        .body.firstChild as Element;

      return {
        text: headingEl.textContent,
        level: headingEl.tagName,
        id: headingEl.id,
      };
    });
  }

  return null;
};
const components: any = {
  img: Image,
  pre: ({ children }: PropsWithChildren) => {
    const { className, children: code } = (
      children?.valueOf() as Record<string, unknown>
    ).props as { className: string; children: string };
    return <CodeBlock lang={className.replace('language-', '')} code={code} />;
  },
};

const MDXContent: React.FC<PostContentProps> = ({ code }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component components={components} />;
};

export default MDXContent;
