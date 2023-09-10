import type { PropsWithChildren } from 'react';

import Header from '@/app/(main)/Header';
import Container from '@/components/Container';

import Background from './Background';
export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className='relative'>
      <Background />

      <Container className='relative z-50 min-h-screen bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-400/20'>
        <Header />
        <main>{children}</main>
      </Container>
    </div>
  );
}
