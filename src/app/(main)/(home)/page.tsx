import Background from '@/app/(main)/(home)/Background';
import { Container } from '@/components/Container';

import Grid from './Grid';
export default function Page() {
  return (
    <div className='relative z-10 min-h-screen'>
      <Background />
      <Container className='relative z-50 px-2'>
        <Grid />
      </Container>
    </div>
  );
}
