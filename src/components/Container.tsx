import { ComponentPropsWithoutRef, forwardRef } from 'react';

import clsxm from '@/lib/clsxm';

type ContainerProps = ComponentPropsWithoutRef<'div'>;
const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { className, children, ...props }: ContainerProps,
  ref,
) {
  return (
    <div
      ref={ref}
      className={clsxm('mx-auto xl:max-w-6xl xl:px-12', className)}
      {...props}
    >
      {children}
    </div>
  );
});
export default Container;
