import React from 'react';

import UploadPicker from './Upload';

export default async function Upload() {
  async function get() {
    const res = await fetch('http://localhost:9000/api/upload', {
      method: 'GET',
    });
    return res.json();
  }
  const data = await get();
  return (
    <div>
      <div>{JSON.stringify(data)}</div>
      <UploadPicker />
    </div>
  );
}
