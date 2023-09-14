import { ComponentPropsWithoutRef, forwardRef } from 'react';

import clsxm from '@/lib/clsxm';

export type ContainerProps = ComponentPropsWithoutRef<'div'>;
const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { className, children, ...props }: ContainerProps,
  ref,
) {
  return (
    <div
      ref={ref}
      className={clsxm(
        'mx-auto px-4 sm:px-8 lg:px-12 xl:max-w-6xl xl:px-12',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
export default Container;
