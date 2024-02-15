"use client";

import styled from "styled-components";

export const StWrapper = styled.div`
  border-radius: 0px !important;
  margin: 0px calc(var(--viewport-padding) * -1) 64px !important;
  border: 1px solid var(--color-card-border);

  & pre {
    padding: var(--viewport-padding) !important;
  }

  & code {
    font-family: var(--font-family-mono);
  }
  & code > div {
    font-size: 1.125rem;
    padding: 0px !important;
  }

  @media (min-width: 56rem) {
    & {
      border-radius: 8px !important;
    }
  }
`;
