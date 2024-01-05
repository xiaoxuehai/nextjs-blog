'use client';

import { motion, type Variants } from 'framer-motion';
import React from 'react';

import clsxm from '@/lib/clsxm';

import { Headling } from './MDXContent';

const listVariants = {
  hidden: {
    // opacity: 0,
    transition: { staggerChildren: 0.5, staggerDirection: -1 },
  },
  visible: {
    // opacity: 1,
    // transition: {
    //   when: 'beforeChildren',
    //   staggerChildren: 0.08,
    //   delayChildren: 0.2,
    //   delay: 0.255,
    //   type: 'spring',
    //   stiffness: 150,
    //   damping: 20,
    // },
    transition: { staggerChildren: 0.7, delayChildren: 0.2 },
  },
} satisfies Variants;
const itemVariants = {
  hidden: {
    // opacity: 0,
    // y: 5,
    // filter: 'blur(8px)',
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  visible: {
    // opacity: 1,
    // y: 0,
    // filter: 'blur(0px)',
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -1000 },
    },
  },
} satisfies Variants;

export function TableOfContents({ headings }: { headings: Headling[] }) {
  const [highlightedHeadingId, setHighlightedHeadingId] = React.useState<
    string | null
  >(null);
  setHighlightedHeadingId(null);
  return (
    <motion.ul
      initial='hidden'
      animate='visible'
      variants={listVariants}
      className='group pointer-events-auto flex flex-col space-y-2 text-zinc-500'
    >
      {headings.map(item => (
        <motion.li
          key={item.id}
          variants={itemVariants}
          className={clsxm(
            'text-[12px] font-medium leading-[18px] transition-colors duration-300',
            item.level === 'H3' && 'ml-1',
            item.level === 'H4' && 'ml-2',
            item.text === highlightedHeadingId
              ? 'text-zinc-900 dark:text-zinc-200'
              : 'hover:text-zinc-700 dark:hover:text-zinc-400 group-hover:[&:not(:hover)]:text-zinc-400 dark:group-hover:[&:not(:hover)]:text-zinc-600',
          )}
        >
          <a href={`#${item.text}`} className='block w-full'>
            {item.text}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
