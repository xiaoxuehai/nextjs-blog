'use client';
import { useEffect, useRef, useState } from 'react';

import { Prose } from '@/components/Prose';

import { getHeadings } from './MDXContent';

import MDXContent, { Headling } from './MDXContent';
import { TableOfContents } from './TableOfContents';
export type ContentProps = {
  code: string;
};
export function Content({ code }: ContentProps) {
  const [headings, setHeadings] = useState<Headling[] | null>(null);
  const contentElRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentElRef.current?.innerHTML) {
      const headings = getHeadings(contentElRef.current?.innerHTML);
      headings && setHeadings(headings);
    }
  }, [code]);
  return (
    <div className='flex justify-between'>
      <Prose ref={contentElRef}>
        <MDXContent code={code} />
      </Prose>
      <aside className='w-[160px] shrink-0 pl-6'>
        <div className='sticky top-24'>
          {headings && <TableOfContents headings={headings} />}
        </div>
      </aside>
    </div>
  );
}
