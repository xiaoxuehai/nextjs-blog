'use client';
import { useInView, motion } from 'framer-motion';
import { FC, PropsWithChildren, useRef } from 'react';

export type FadeInProps = PropsWithChildren & {
  delay?: number;
  className?: string;
};

export const FadeIn: FC<FadeInProps> = ({ children, className, delay }) => {
  enum Animate {
    Animate = 'animate',
    Initial = 'hidden',
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = {
    [Animate.Initial]: { opacity: 0, y: 30, scale: 0.9 },
    [Animate.Animate]: { opacity: 1, y: 0, scale: 1 },
  };
  return (
    <motion.div
      ref={ref}
      animate={isInView ? Animate.Animate : Animate.Initial}
      variants={variants}
      className={className}
      initial={false}
      transition={{
        duration: 1,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
};
