import Background from '@/app/(main)/(home)/Background';
import About from '@/contents/about/index.mdx';

import Grid from './Grid';

export default function Page() {
  return (
    <div className='relative z-10'>
      <Background />
      <Grid />
      <div className='prose relative z-20 max-w-7xl dark:prose-invert'>
        <About />
      </div>
    </div>
  );
}
