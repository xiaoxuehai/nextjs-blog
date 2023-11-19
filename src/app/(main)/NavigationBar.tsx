'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import type { HTMLAttributes, MouseEvent, PropsWithChildren } from 'react';

import { FaAngleDown } from 'react-icons/fa';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
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
            ? ' text-sky-600 dark:text-sky-400'
            : 'hover:text-sky-600 dark:hover:text-sky-400',
        )}
      >
        {children}
        {isActive && (
          <motion.span
            className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-amber-700/0 via-sky-700/70 to-sky-700/0 dark:from-amber-400/0 dark:via-sky-400/40 dark:to-amber-400/0'
            layoutId='active-navigation-item'
          />
        )}
      </Link>
    </li>
  );
}
function MobileNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href} className='block py-3'>
        {children}
      </Link>
    </li>
  );
}

function Desktop({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
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
        '[--spotlight-color:rgb(2,132,199,0.1)] dark:[--spotlight-color:rgb(2,132,199,0.3)]',
        className,
      )}
      {...rest}
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
function Mobile({ className }: { className: string }) {
  return (
    <Dialog>
      <DialogTrigger
        className={clsxm(
          'group flex w-20 items-center justify-between rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20',
          className,
        )}
      >
        前往
        <FaAngleDown />
      </DialogTrigger>
      <DialogContent className='top-48 w-11/12 divide-zinc-500/20 rounded-3xl px-8 py-6 shadow-none'>
        <DialogHeader>
          <DialogTitle className='text-base'>站内导航</DialogTitle>
        </DialogHeader>

        <nav className='mt-6'>
          <ul className='-my-2 divide-y divide-zinc-500/20 text-base  dark:divide-zinc-100/5'>
            {NAVIGATION_ITEMS.map(({ href, text }) => (
              <MobileNavItem key={href} href={href}>
                <DialogClose className='w-full text-left'>{text}</DialogClose>
              </MobileNavItem>
            ))}
          </ul>
        </nav>
      </DialogContent>
    </Dialog>
  );
}

export function NavigationBar() {
  return (
    <>
      <Desktop className='hidden md:block' />
      <Mobile className='md:hidden' />
    </>
  );
}
