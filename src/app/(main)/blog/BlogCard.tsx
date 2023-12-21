import React from 'react';

import LineLink from '@/components/LineLink';
export type BlogCardProps = {
  blog: any;
};
export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <LineLink
      href={'blog_path'}
      className='group block max-w-full transition-all'
    >
      <div className='flex items-center'>
        <div className='max-w-full'>
          <h3 className='mb-3 text-xl tracking-wide opacity-90 transition-all group-hover:scale-105 group-hover:font-bold group-hover:text-sky-400 group-hover:dark:text-sky-600'>
            <span>{blog.title}</span>
          </h3>
          <div className='wrap mb-3 flex items-center overflow-hidden whitespace-nowrap text-sm'>
            <span className='opacity-70'>{blog.readingMins} min</span>
            <span className='px-2 opacity-50'>·</span>
            <div className='items-center overflow-hidden'>
              <div className='opacity-60'>{blog.description}</div>
            </div>
          </div>
        </div>
      </div>
    </LineLink>
  );
}
