'use client';
import React from 'react';
import ReactGridLayout from 'react-grid-layout';

export default function Grid() {
  return (
    <ReactGridLayout className='layout' cols={12} rowHeight={30} width={1200}>
      <div
        className='bg-blue-500'
        key='a'
        data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}
      >
        a
      </div>
      <div
        className='bg-blue-500'
        key='b'
        data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}
      >
        b
      </div>
      <div
        className='bg-blue-500'
        key='c'
        data-grid={{ x: 4, y: 0, w: 1, h: 2 }}
      >
        c
      </div>
    </ReactGridLayout>
  );
}
