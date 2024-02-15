import React from 'react';
import { Rss } from 'react-feather';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';

import ThemeToggle from '../ThemeToggle';
import { StAction, StActions, StWrapper } from './Header.styled';

function Header({ ...delegated }) {
  return (
    <StWrapper
      {...delegated}
    >
      <Logo />

      <StActions>
        <StAction>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: 'translate(2px, -2px)',
            }}
          />
          <VisuallyHidden>
            View RSS feed
          </VisuallyHidden>
        </StAction>
        <ThemeToggle />
      </StActions>
    </StWrapper>
  );
}

export default Header;
