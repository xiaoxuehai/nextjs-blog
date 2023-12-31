'use client';

import React from 'react';
import RGL, { Layout, WidthProvider } from 'react-grid-layout';

import './styles/grid-module.css';
const ReactGridLayout = WidthProvider(RGL);

export default function Grid() {
  const props = {
    // items: 2,
    // rowHeight: 30,
    cols: 24,
  };

  const layout: Layout[] = [
    { x: 0, y: 0, w: 14, h: 11, i: '0', isResizable: false },
    { x: 14, y: 1, w: 10, h: 11, i: '1', isResizable: false },
    { x: 0, y: 2, w: 24, h: 20, i: '2', isResizable: false },
    { x: 0, y: 3, w: 10, h: 11, i: '3', isResizable: false },
    { x: 14, y: 4, w: 14, h: 11, i: '4', isResizable: false },

    { x: 0, y: 5, w: 12, h: 14, i: '5', isResizable: false },
    { x: 12, y: 6, w: 12, h: 9, i: '6', isResizable: false },
    { x: 0, y: 7, w: 12, h: 9, i: '7', isResizable: false },
    { x: 12, y: 8, w: 12, h: 14, i: '8', isResizable: false },
  ];
  console.log(layout, 'layout');

  function onLayoutChange(data: any) {
    console.log(data, 'data');
  }
  //   react-grid-item box-border w-full flex flex-col justify-center card bg-say-hello react-draggable cssTransforms react-resizable-hide react-resizable
  return (
    <ReactGridLayout
      layout={layout}
      margin={[10, 10]}
      onLayoutChange={onLayoutChange}
      className='relative'
      rowHeight={10}
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
      <div
        key={0}
        className='card'
        style={{
          backgroundImage: 'linear-gradient(120deg,#5b27ff,#00d4ff)',
        }}
      >
        <span className='text'>0</span>
      </div>
      <div key={1} className='card'>
        <span className='text'>1</span>
      </div>
      <div key={2} className='card'>
        <span className='text'>2</span>
      </div>
      <div key={3} className='card'>
        <span className='text'>3</span>
      </div>
      <div key={4} className='card'>
        <span className='text'>4</span>
      </div>
      <div key={5} className='card'>
        <span className='text'>5</span>
      </div>
      <div key={6} className='card'>
        <span className='text'>6</span>
      </div>
      <div key={7} className='card'>
        <span className='text'>7</span>
      </div>
      <div key={8} className='card'>
        <span className='text'>8</span>
      </div>
    </ReactGridLayout>
  );
}
