'use client';

import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);
// const ReactGridLayout = RGL;
import './styles/grid.css';

export default function Grid() {
  const props = {
    items: 6,
    // rowHeight: 30,
    cols: 24,
  };

  const layout = [
    { x: 0, y: 0, w: 8, h: 1, i: '0' },

    { x: 12, y: 0, w: 16, h: 1, i: '1' },

    { x: 0, y: 0, w: 24, h: 1, i: '2' },

    { x: 0, y: 0, w: 10, h: 1, i: '3' },

    { x: 14, y: 0, w: 14, h: 1, i: '4' },
  ];
  console.log(layout, 'layout');

  function onLayoutChange(data: any) {
    console.log(data, 'data');
  }

  return (
    <ReactGridLayout
      layout={layout}
      margin={[12, 12]}
      onLayoutChange={onLayoutChange}
      {...props}
    >
      {/* <div>
        <span className='text'>{1}</span>
      </div>
      <div>
        <span className='text'>{2}</span>
      </div>
      <div>
        <span className='text'>{3}</span>
      </div>
      <div>
        <span className='text'>{4}</span>
      </div>
      <div>
        <span className='text'>{5}</span>
      </div> */}
      {/* {generateDOM()} */}
      <div key={0}>
        <span className='text'>0</span>
      </div>
      <div key={1}>
        <span className='text'>1</span>
      </div>
      <div key={2}>
        <span className='text'>2</span>
      </div>
      <div key={3}>
        <span className='text'>3</span>
      </div>
      <div key={4}>
        <span className='text'>4</span>
      </div>
    </ReactGridLayout>
  );
}
