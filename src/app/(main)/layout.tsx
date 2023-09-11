import type { PropsWithChildren } from 'react';

import Background from './Background';
import Header from './Header';
export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className='relative z-50'>
      <Background />

      {/* <Container className='relative z-50 min-h-screen bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-400/20'> */}
      <Header />
      <main>{children}</main>
      {/* </Container> */}
    </div>
  );
}
