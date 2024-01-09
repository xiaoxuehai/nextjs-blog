'use client';
// import { MDXComponents } from '@mdx/types';
import { MDXComponents } from 'mdx/types';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';

import { CodeBlock } from './CodeBlock';

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
        level: headingEl.tagName.toLocaleLowerCase(),
        id: headingEl.id,
      };
    });
  }

  return null;
};
const components: MDXComponents = {
  //   img: Image,
  pre: ({ children }) => {
    const { className, children: code } = (
      children?.valueOf() as Record<string, unknown>
    ).props as { className: string; children: string };
    return (
      <CodeBlock
        filename='config.js'
        language={className.replace('language-', '')}
        code={code}
      />
    );
  },
};

const MDXContent: React.FC<PostContentProps> = ({ code }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component components={components} />;
};

export default MDXContent;
