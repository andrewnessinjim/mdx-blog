import React from 'react';
import { BLOG_TITLE } from '@/constants';

import { StWrapper } from './Logo.styled';

function Logo({ mobileAlignment = 'left' }) {
  return (
    <StWrapper
      href="/"
      data-mobile-alignment={mobileAlignment}
    >
      {BLOG_TITLE}
    </StWrapper>
  );
}

export default Logo;
