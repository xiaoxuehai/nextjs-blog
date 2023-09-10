'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { NavigationBar } from '@/app/(main)/NavigationBar';
import { ThemeSwitch } from '@/app/(main)/ThemeSwitch';
import Container from '@/components/Container';

export default function Header() {
  return (
    <Container>
      <div className='z-10 flex h-16 pt-6'>
        <div className='flex-1'>Blog</div>
        <div className='flex flex-1 justify-center'>
          <NavigationBar />
        </div>
        <motion.div
          className='flex justify-end gap-3 md:flex-1'
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
        >
          <div className='pointer-events-auto'>
            <ThemeSwitch />
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
