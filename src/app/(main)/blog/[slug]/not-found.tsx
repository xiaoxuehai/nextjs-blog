import Link from 'next/link';
export default function NotFound() {
  return (
    <div className='flex h-full flex-col items-center justify-center space-y-4'>
      <h2 className='text-3xl font-bold text-slate-700 dark:text-rose-50'>
        Blog not found
      </h2>
      <div className='flex flex-row space-x-2'>
        <Link href='/blog'>所有博客</Link>
        <Link href='/'>首页</Link>
      </div>
    </div>
  );
}
