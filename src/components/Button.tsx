import { ComponentPropsWithoutRef, forwardRef } from 'react';

import clsxm from '@/lib/clsxm';
export type ButtonProps = ComponentPropsWithoutRef<'button'>;
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={clsxm(
        'group flex items-center justify-between rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
});
export default Button;
