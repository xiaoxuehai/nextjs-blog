import { notFound } from 'next/navigation';
import React from 'react';

import { MDXContent } from '@/components/MdxContent';

import { allBlogs } from 'contentlayer/generated';

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find(({ slug }) => slug === params.slug);
  console.log(blog, 'blog');

  if (!blog) {
    notFound();
  }

  return <MDXContent code={blog.body.code} />;
}
