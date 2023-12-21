import BlogCard from './BlogCard';

export default function Blog() {
  const blogs = [1, 2, 3, 4];
  return (
    <div className='mx-auto py-8 md:max-w-3xl'>
      {blogs.map(item => (
        <div className='mb-6' key={item}>
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
