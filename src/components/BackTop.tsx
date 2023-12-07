'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useMemo, useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';
enum Animate {
  Show = 'show',
  Hidden = 'hidden',
}
const BackTop = () => {
  const variants = {
    [Animate.Hidden]: { opacity: 0, y: '100%' },
    [Animate.Show]: { opacity: 1, y: 0 },
  };
  const { scrollY } = useScroll();

  const [scrollTop, setScrollTop] = useState(0);

  useMotionValueEvent(scrollY, 'change', latest => {
    setScrollTop(latest);
  });

  const animate = useMemo(
    () => (scrollTop > 500 ? Animate.Show : Animate.Hidden),
    [scrollTop],
  );

  function handleBackTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <motion.div
      className='fixed bottom-8 right-8 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-white/70
        shadow-lg shadow-black/5 ring-1
        ring-zinc-400/20 backdrop-blur active:shadow-none dark:bg-white/10
        dark:shadow-none sm:bottom-16 sm:right-16'
      initial={variants[Animate.Hidden]}
      animate={animate}
      variants={variants}
      onClick={handleBackTop}
    >
      <BiArrowToTop
        className='text-xl text-black dark:text-white'
        aria-hidden
      />
    </motion.div>
  );
};

export default BackTop;
