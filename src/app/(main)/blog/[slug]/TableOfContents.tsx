'use client';

import { motion, type Variants } from 'framer-motion';
import React from 'react';

import clsxm from '@/lib/clsxm';

import { Headling } from './MDXContent';
enum Animate {
  Show = 'show',
  Hidden = 'hidden',
}
const listVariants = {
  [Animate.Hidden]: {
    opacity: 0,
  },
  [Animate.Show]: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
} satisfies Variants;
const itemVariants = {
  [Animate.Hidden]: {
    filter: 'blur(4px)',
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  [Animate.Show]: {
    filter: 'blur(0px)',
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
  console.log(setHighlightedHeadingId, 'setHighlightedHeadingId');
  return (
    <motion.ul
      initial={Animate.Hidden}
      animate={Animate.Show}
      variants={listVariants}
      className='pointer-events-auto flex flex-col space-y-2 text-zinc-500'
    >
      {headings.map(item => (
        <motion.li
          key={item.id}
          whileHover={{
            scale: 1.05,
            fontWeight: 700,
            transition: { duration: 0.2 },
          }}
          variants={itemVariants}
          className={clsxm(
            'text-sm font-medium transition-colors duration-300',
            item.level === 'H3' && 'ml-1',
            item.level === 'H4' && 'ml-2',
            item.text === highlightedHeadingId
              ? 'font-bold text-zinc-900 dark:text-zinc-100'
              : 'hover:text-zinc-700 dark:hover:text-zinc-400',
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
