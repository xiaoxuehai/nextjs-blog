'use client';
import React from 'react';

export default function UploadPicker() {
  async function upload(body: any) {
    const res = await fetch('/api/upload', {
      method: 'POST',
      body,
    });
    return res.json();
  }
  return (
    <input
      type='file'
      onChange={async ({ target }) => {
        if (!target.files) return;
        const file = target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        await upload(formData);
      }}
    />
  );
}
