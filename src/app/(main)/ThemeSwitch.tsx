'use client';

import { useTheme } from 'next-themes';
import React, { useMemo } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

import Button from '@/components/Button';

const themes = [
  {
    label: '浅色模式',
    value: 'light',
    icon: BiSun,
  },
  {
    label: '深色模式',
    value: 'dark',
    icon: BiMoon,
  },
];
export function ThemeSwitch() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const ThemeIcon = useMemo(
    () => themes.find(item => item.value === theme)?.icon,
    [theme],
  );

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }
  return (
    <Button onClick={toggleTheme}>
      <ThemeIcon className='h-6 w-6 stroke-zinc-500 p-0.5 transition group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-200' />
    </Button>
  );
}
