'use client';
import React, { useState } from 'react';

import UploadPicker from './Upload';
type RequestParams = {
  appid: string;
  version: string;
  desc?: string;
  projectFile: File | null;
  privateFile: File | null;
};
export default function Upload() {
  // async function get() {
  //   const res = await fetch('http://localhost:9000/api/upload', {
  //     method: 'GET',
  //   });
  //   return res.json();
  // }
  // const data = await get();

  const [params, setParams] = useState<RequestParams>({
    appid: 'wx5e184e9a364627ad',
    version: new Date().toLocaleDateString(),
    desc: '测试上传',
    projectFile: null,
    privateFile: null,
  });

  async function handleSubmit() {
    const formData = new FormData();
    for (const [key, value] of Object.entries(params)) {
      value && formData.append(key, value);
    }
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    return res.json();
  }
  return (
    <div>
      {/* <div>{JSON.stringify(data)}</div> */}
      <UploadPicker
        onChange={(projectFile: any) =>
          setParams(params => ({ ...params, projectFile }))
        }
      />
      <UploadPicker
        onChange={(privateFile: any) =>
          setParams(params => ({ ...params, privateFile }))
        }
      />
      <input
        type='text'
        value={params.appid}
        onChange={({ target }) =>
          setParams(params => ({ ...params, appid: target.value }))
        }
      />
      <input
        type='text'
        value={params.version}
        onChange={({ target }) =>
          setParams(params => ({ ...params, version: target.value }))
        }
      />
      <button onClick={handleSubmit}>提交</button>
    </div>
  );
}
