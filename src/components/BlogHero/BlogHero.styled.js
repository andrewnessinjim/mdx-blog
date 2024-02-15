
"use client";

import styled from "styled-components";

export const StWrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: var(--outer-content-width);
  margin: 0 auto;
`;

export const StContent = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--content-width);
  padding: var(--viewport-padding);
  padding-top: calc(48px + 8vw);
  padding-bottom: 64px;

  & h1 {
    margin-bottom: 0.5rem;
  }

  & p {
    font-size: 1.125rem;
    color: var(--color-decorative-900);
    margin-bottom: 0px;
    font-weight: 400;
  }

  & time {
    font-weight: 500;
  }

  @media (min-width: 35rem) {
    & p {
      font-size: 1.25rem;
    }
  }
`;
