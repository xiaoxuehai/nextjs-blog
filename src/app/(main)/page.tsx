import Background from '@/components/Background';
import About from '@/contents/about/index.mdx';

export default function Page() {
  return (
    <div className='relative z-10'>
      <Background />
      <div className='prose max-w-7xl dark:prose-invert'>
        <About />
      </div>
    </div>
  );
}
