'use client';
import React from 'react';

export default function UploadPicker(props: any) {
  return (
    <input
      type='file'
      onChange={async ({ target }) => {
        if (!target.files) return;
        const file = target.files[0];
        props.onChange(file);
      }}
    />
  );
}
