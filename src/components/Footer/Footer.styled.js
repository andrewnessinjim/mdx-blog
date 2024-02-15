"use client";

import styled from "styled-components";

export const StWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;

  & {
    padding-bottom: 64px;
    text-align: revert;
  }
`;

export const StContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;
  max-width: var(--content-width);
  padding: 0 var(--viewport-padding);
  padding-bottom: 48px;

  @media (min-width: 35rem) {
    & {
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
      gap: 32px;
    }
  }
`;

export const StAttribution = styled.p`
  margin-top: 24px;
  font-size: 0.875rem;
  color: var(--color-decorative-900);
  max-width: 18rem;

  & a {
    color: var(--color-gray-900);
    text-decoration: none;
    font-weight: 700;
  }

  & a:hover {
    text-decoration: revert;
    text-underline-offset: 0.125em;
    text-decoration-thickness: 1.5px;
  }
`;

export const StLinkHeading = styled.h2`
  font-size: 1.25rem;
`;

export const StLinksList = styled.ul`
  margin-top: 24px;
  list-style-type: none;
  padding: 0;

  & a {
    text-decoration: none;
    font-size: 1rem;
  }

  & li:not(:last-child) {
    margin-bottom: 8px;
  }
`;
