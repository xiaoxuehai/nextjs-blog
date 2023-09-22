import { ComponentPropsWithoutRef, forwardRef } from 'react';

import clsxm from '@/lib/clsxm';

export type ContainerProps = ComponentPropsWithoutRef<'div'>;
const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={clsxm(
        'mx-auto px-4 sm:px-8 lg:px-12 xl:max-w-7xl xl:px-12 2xl:max-w-[1400px]',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
export default Container;
