import React from 'react';
import Link from 'next/link';
import { Comic_Neue } from 'next/font/google';
import { BLOG_TITLE } from '@/constants';

import styles from './Logo.module.css';

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["700"]
})

function Logo({ mobileAlignment = 'left' }) {
  return (
    <Link
      href="/"
      className={styles.wrapper + " " +comicNeue.className}
      data-mobile-alignment={mobileAlignment}
    >
      {BLOG_TITLE}
    </Link>
  );
}

export default Logo;
