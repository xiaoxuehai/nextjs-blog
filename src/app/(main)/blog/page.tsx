import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

import { allBlogs, Blog } from 'contentlayer/generated';

function PostCard(blog: Blog) {
  return (
    <div className='mb-8'>
      <h2 className='mb-1 text-xl'>
        <Link
          href={`/blog/${blog.slug}`}
          className='text-blue-700 hover:text-blue-900 dark:text-blue-400'
        >
          {blog.title}
        </Link>
      </h2>
      <time dateTime={blog.date} className='mb-2 block text-xs text-gray-600'>
        {format(parseISO(blog.date), 'LLLL d, yyyy')}
      </time>
      <time dateTime={blog.date} className='mb-2 block text-xs text-gray-600'>
        {blog.date}
      </time>
      {/* <div
        className='text-sm [&>*:last-child]:mb-0 [&>*]:mb-3'
        dangerouslySetInnerHTML={{ __html: blog.body.html }}
      /> */}
    </div>
  );
}

export default function Blog() {
  const blogs = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className='mx-auto max-w-xl py-8'>
      <h1 className='mb-8 text-center text-2xl font-black'>
        Next.js + Contentlayer Example
      </h1>
      {blogs.map((blog, idx) => (
        <div key={idx}>
          <PostCard {...blog} />
        </div>
      ))}
    </div>
  );
}
