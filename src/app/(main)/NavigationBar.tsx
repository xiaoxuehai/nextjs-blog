'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import type { HTMLAttributes, MouseEvent, PropsWithChildren } from 'react';

import { NAVIGATION_ITEMS } from '@/config/app';
import clsxm from '@/lib/clsxm';

function NavigationItem({
  href,
  children,
}: PropsWithChildren & { href: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={clsxm(
          'relative flex h-full items-center whitespace-nowrap px-3 py-2 transition',
          isActive
            ? 'text-amber-600 dark:text-amber-400'
            : 'hover:text-amber-600 dark:hover:text-amber-400',
        )}
      >
        {children}
        {isActive && (
          <motion.span
            className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-amber-700/0 via-amber-700/70 to-amber-700/0 dark:from-amber-400/0 dark:via-amber-400/40 dark:to-amber-400/0'
            layoutId='active-nav-item'
          />
        )}
      </Link>
    </li>
  );
}
function Desktop({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const handleMouseMove = useCallback(
    ({ clientX, clientY, currentTarget }: MouseEvent) => {
      const bounds = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - bounds.left);
      mouseY.set(clientY - bounds.top);
      radius.set(Math.sqrt(bounds.width ** 2 + bounds.height ** 2) / 2.5);
    },
    [mouseX, mouseY, radius],
  );
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, var(--spotlight-color) 0%, transparent 65%)`;

  return (
    <nav
      onMouseMove={handleMouseMove}
      className={clsxm(
        'group relative',
        'rounded-full bg-gradient-to-b from-zinc-50/70 to-white/90',
        'shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md',
        'dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10',
        '[--spotlight-color:rgb(234_88_12_/_0.15)] dark:[--spotlight-color:rgb(217_249_157_/_0.1)]',
        className,
      )}
      {...props}
    >
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100'
        style={{ background }}
      />

      <ul className='flex h-full bg-transparent px-3 text-sm font-medium text-zinc-800 dark:text-zinc-200'>
        {NAVIGATION_ITEMS.map(({ href, text }) => (
          <NavigationItem key={href} href={href}>
            {text}
          </NavigationItem>
        ))}
      </ul>
    </nav>
  );
}
export function NavigationBar() {
  return <Desktop />;
}
