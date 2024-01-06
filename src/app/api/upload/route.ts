import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';

import compressing from 'compressing';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  console.log(formData);
  const file = formData.get('file') as File;
  if (!file) {
    return NextResponse.json({}, { status: 400 });
  }
  console.log(`File name: ${file.name}`);
  console.log(`Content-Length: ${file.size}`);
  const destinationDirPath = path.join(process.cwd(), 'public/upload');
  console.log(destinationDirPath);
  const fileArrayBuffer = await file.arrayBuffer();
  if (!existsSync(destinationDirPath)) {
    fs.mkdir(destinationDirPath, { recursive: true });
  }
  // await fs.writeFile(
  //   path.join(destinationDirPath, file.name),
  //   Buffer.from(fileArrayBuffer),
  // );
  await compressing.zip.uncompress(
    Buffer.from(fileArrayBuffer),
    destinationDirPath,
  );

  return NextResponse.json({
    fileName: file.name,
    size: file.size,
    lastModified: new Date(file.lastModified),
  });
}
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  return NextResponse.json({ id }, { status: 200 });
}
