"use client";

import styled from "styled-components";
import Card from "@/components/Card";
import Link from "next/link";

export const StWrapper = styled(Card)`
  width: 100%;
  max-width: 750px;
  margin-bottom: 32px;

  p {
    font-size: 1.125rem;
    margin-bottom: 0;
  }

  time {
    display: block;
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 1.125rem;
    color: var(--color-decorative-900);
  }
`;

export const StTitle = styled(Link)`
  display: block;
  font-size: 1.75rem;
  line-height: 1.3;
  text-decoration: none;
  transition: color 200ms;
  margin-bottom: 0.25rem;

  &:hover {
    color: var(--color-primary);
  }
`;

export const StArrow = styled.span`
  display: inline-block;
  font-family: "Monaco", monospace;
  color: var(--color-primary);
  transition: transform 200ms;
  font-weight: 400;
`;

export const StContinueReadingLink = styled(Link)`
  font-weight: 600;

  &:hover {
    text-underline-offset: 0.125em;
  }

  &:hover ${StArrow} {
    transform: translateX(4px);
  }
`;
