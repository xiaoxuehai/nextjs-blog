import Background from '@/app/(main)/(home)/Background';
import Container from '@/components/Container';

import Grid from './Grid';
// import About from '@/contents/about/index.mdx';

export default function Page() {
  return (
    <div className='relative z-10'>
      <Background />
      <Container className='relative z-50 px-2'>
        <Grid />
        {/* <div className='prose relative z-20 max-w-7xl dark:prose-invert'>
          <About />
        </div> */}
      </Container>
    </div>
  );
}
