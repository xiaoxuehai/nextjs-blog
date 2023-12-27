import { getAllFilesFrontmatter } from '@/lib/mdx';

import BlogCard from './BlogCard';

export default async function Blog() {
  const blogs = await getAllFilesFrontmatter('blog');
  console.log(blogs, 'blogs');

  return (
    <div className='mx-auto py-8 md:max-w-3xl'>
      {blogs.map(item => (
        <div className='mb-6' key={item.slug}>
          <BlogCard
            blog={{
              title: 'VueUse Head v1 release',
              readingMins: 9,
              description:
                'Learn about the new @vueuse/head v1 release including new features and breaking changes',
            }}
          />
        </div>
      ))}
    </div>
  );
}
