import React from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';

import DecorativeSwoops from './DecorativeSwoops';
import { StAttribution, StContent, StLinkHeading, StLinksList, StWrapper } from './Footer.styled';

function Footer() {
  return (
    <StWrapper>
      <DecorativeSwoops />
      <StContent>
        <div>
          <Logo mobileAlignment="center" />
          {/*
            NOTE: If you'd like to build your blog on top
            of this code, the license requires that you leave
            this paragraph untouched. Check out LICENSE.md
            for more information.
          */}
          <StAttribution>
            Blog template created by{' '}
            <a href="https://www.joshwcomeau.com/">
              Josh W. Comeau
            </a>
            . Check out{' '}
            <a href="https://www.joyofreact.com/">
              The Joy of React
            </a>{' '}
            to learn how to build dynamic React apps like
            this one!
          </StAttribution>
        </div>
        <nav>
          <StLinkHeading>Links</StLinkHeading>
          <StLinksList>
            <li>
              <Link href="/rss">RSS feed</Link>
            </li>
            <li>
              <Link href="/todo">Terms of Use</Link>
            </li>
            <li>
              <Link href="/todo">Privacy Policy</Link>
            </li>
            <li>
              <a href="https://twitter.com/JoshWComeau">
                Twitter
              </a>
            </li>
          </StLinksList>
        </nav>
      </StContent>
    </StWrapper>
  );
}

export default Footer;
