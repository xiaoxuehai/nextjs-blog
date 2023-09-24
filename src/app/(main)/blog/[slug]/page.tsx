import React from 'react';

export default function BlogDetail({ params }: { params: { slug: string } }) {
  return (
    <article className='prose max-w-none pb-16 dark:prose-invert'>
      {params.slug}
    </article>
  );
}
