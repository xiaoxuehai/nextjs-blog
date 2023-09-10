import type { PropsWithChildren } from 'react';

export default function layout(props: PropsWithChildren) {
  return (
    <div>
      <div className='h-10 w-full bg-gray-300'>这是test布局的header</div>
      {props.children}
    </div>
  );
}
