import React from 'react';

import './styles.css';
export default function Background() {
  return (
    <div className='pointer-events-none absolute left-0 top-0 h-full max-h-[1000px] w-full overflow-hidden'>
      <span className='absolute bottom-0 left-0 z-10 h-48 w-full bg-gradient-to-t from-white to-white/10 dark:from-black dark:to-black/10'></span>

      <span className='background-left'></span>
      <span className='background-right'></span>
      <div
        className='absolute inset-0 overflow-hidden'
        style={{
          perspective: 1000,
          transition: 'perspective 3s',
        }}
      >
        <div className='absolute inset-0 z-10 bg-gradient-to-t from-white/0 to-white to-95% dark:from-black/0 dark:to-black'></div>
        <div
          className='absolute bottom-0 left-0 right-0 top-0'
          style={{ transform: 'rotateX(75deg)' }}
        >
          <div className='heroLines bg-gradient-to-r from-[var(--right)] to-[var(--left)]  [--left:rgba(248_205_232_/_0.55)] [--right:rgba(185_221_255_/_0.45)]'></div>
        </div>
      </div>
    </div>
  );
}
