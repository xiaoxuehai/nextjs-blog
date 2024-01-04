import { ComponentPropsWithoutRef, PropsWithChildren, forwardRef } from 'react';

import clsxm from '@/lib/clsxm';

export type ProseProps = PropsWithChildren &
  ComponentPropsWithoutRef<'div'> & {
    className?: string;
  };
export const Prose = forwardRef<HTMLDivElement, ProseProps>(function Prose(
  { className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={clsxm(className, 'prose max-w-full dark:prose-invert')}
      {...rest}
    >
      {children}
    </div>
  );
});
