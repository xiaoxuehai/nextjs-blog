import Background from '@/app/(main)/(home)/Background';
import Container from '@/components/Container';
import About from '@/contents/about/index.mdx';

import Grid from './Grid';

export default function Page() {
  return (
    <div className='relative z-10'>
      <Background />
      <Container>
        <Grid />
        <div className='prose relative z-20 max-w-7xl dark:prose-invert'>
          <About />
        </div>
      </Container>
    </div>
  );
}
