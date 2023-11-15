'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { NavigationBar } from '@/app/(main)/NavigationBar';
import { ThemeSwitch } from '@/app/(main)/ThemeSwitch';
import Container from '@/components/Container';
enum Animate {
  Show = 'show',
  Hidden = 'hidden',
}
export default function Header() {
  const preScrollY = useRef(0);
  const [animate, setAnimate] = useState<Animate>(Animate.Show);
  useEffect(() => {
    const handleScroll = () => {
      setAnimate(
        window.scrollY < preScrollY.current ? Animate.Show : Animate.Hidden,
      );
      preScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const variants = {
    [Animate.Hidden]: { opacity: 0, y: '-100%', scale: 0.9 },
    [Animate.Show]: { opacity: 1, y: 0, scale: 1 },
  };
  return (
    <motion.div
      className='sticky top-0 z-50'
      initial={variants.hidden}
      animate={animate}
      variants={variants}
    >
      <Container>
        <div className='z-50 flex py-6'>
          <Link href='/' className='flex-1'>
            <Image
              width={40}
              height={40}
              className='rounded-full'
              src='/avatar.jpg'
              alt=''
            ></Image>
          </Link>
          <div className='flex flex-1 justify-center px-4'>
            <NavigationBar />
          </div>
          <div className='pointer-events-auto flex justify-end gap-3 md:flex-1'>
            <ThemeSwitch />
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
