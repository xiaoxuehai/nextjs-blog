import { existsSync } from 'fs';
import fs from 'fs';

import path from 'path';

import compressing from 'compressing';
// import * as ci from 'miniprogram-ci';
import { NextRequest, NextResponse } from 'next/server';
export type DeployOptions = {
  appid: string;
  projectPath: string;
  privateKeyPath: string;
  version: string;
  desc?: string;
};
export async function deploy(options: DeployOptions) {
  console.log(999, '999');

  if (!existsSync(options.projectPath)) {
    console.error(
      `"options.projectPath"选项配置的路径不存在,本次上传终止:${options.projectPath}`,
    );
    process.exit(1);
  }
  if (!existsSync(options.privateKeyPath)) {
    console.error(
      `"options.privateKeyPath"选项配置的路径不存在,本次上传终止:${options.privateKeyPath}`,
    );
    process.exit(1);
  }
  // const project = new ci.Project({
  //   type: 'miniProgram',
  //   projectPath: options.projectPath,
  //   appid: options.appid,
  //   privateKeyPath: options.privateKeyPath,
  //   ignores: ['node_modules/**/*'],
  // });
  // try {
  //   const uploadResult = await ci.upload({
  //     version: options.version,
  //     project,
  //     desc: options.desc,
  //     onProgressUpdate: console.log,
  //   });

  //   if (uploadResult.subPackageInfo) {
  //     const allPackageInfo = uploadResult.subPackageInfo.find(
  //       item => item.name === '__FULL__',
  //     );
  //     const mainPackageInfo = uploadResult.subPackageInfo.find(
  //       item => item.name === '__APP__',
  //     );
  //     const extInfo = `本次上传${allPackageInfo!.size / 1024}kb ${
  //       mainPackageInfo ? ',其中主包' + mainPackageInfo.size + 'kb' : ''
  //     }`;

  //     console.log(
  //       `版本 ${
  //         options.version
  //       } 上传成功 ${new Date().toLocaleString()} ${extInfo}\n`,
  //     );
  //   }
  // } catch (error) {
  //   console.error(`上传失败 ${new Date().toLocaleString()} \n${error}`);
  //   process.exit(1);
  // }
}
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const projectFile = formData.get('projectFile') as File;
  const privateFile = formData.get('privateFile') as File;
  const appid = formData.get('appid') as string;
  const version = formData.get('version') as string;
  const desc = formData.get('desc') as string;
  if (!projectFile) {
    return NextResponse.json({ message: '请上传项目文件夹' }, { status: 400 });
  }
  if (!privateFile) {
    return NextResponse.json(
      { message: '请上传小程序上传密钥' },
      { status: 400 },
    );
  }
  const destinationDirPath = path.join(process.cwd(), 'public/upload');

  const fileArrayBuffer = await projectFile.arrayBuffer();
  const projectPath = path.join(destinationDirPath, 'project');
  const privateKeyPath = path.join(destinationDirPath, 'private');
  if (!existsSync(privateKeyPath)) {
    fs.mkdirSync(privateKeyPath);
  } else {
    fs.rmdirSync(privateKeyPath);
  }
  if (!existsSync(projectPath)) {
    fs.mkdirSync(projectPath);
  } else {
    fs.rmdirSync(projectPath, { recursive: true });
  }
  fs.writeFileSync(privateKeyPath, Buffer.from(fileArrayBuffer));
  await compressing.zip.uncompress(Buffer.from(fileArrayBuffer), projectPath);

  await deploy({
    appid,
    projectPath,
    privateKeyPath: path.join(privateKeyPath, privateFile.name),
    version,
    desc,
  });

  return NextResponse.json(
    {
      message: '上传成功',
    },
    { status: 200 },
  );
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  return NextResponse.json({ id }, { status: 200 });
}
