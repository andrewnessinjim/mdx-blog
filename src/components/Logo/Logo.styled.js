"use client";

import Link from "next/link";
import styled from "styled-components";

export const StWrapper = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  transition: font-weight 400ms, transform 400ms;
  will-change: transform;

  @media (min-width: 35rem) {
      font-size: 1.5rem;
  }

  @media (pointer: fine) {
    &:hover {
      font-weight: 900;
      transition: font-weight 100ms, transform 100ms;
      transform: translateX(-1px);
    }
  }

  @media (pointer: fine) and (max-width: 35rem) {
    &[data-mobile-alignment="center"]:hover {
      transform: translateX(0px);
    }
  }
`;
