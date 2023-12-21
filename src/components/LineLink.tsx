import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';

import clsxm from '@/lib/clsxm';

import $styles from './styles/LineLink.module.css';
export type LineLinkProps = LinkProps &
  PropsWithChildren & {
    className?: string;
  };
export default function LineLink({
  className,
  children,
  ...rest
}: LineLinkProps) {
  return (
    <Link {...rest} className={clsxm($styles.link, className)}>
      {children}
    </Link>
  );
}
