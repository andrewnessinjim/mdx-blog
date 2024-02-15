import styled from "styled-components";

export const StWrapper = styled.button`
  display: block;
  border: none;
  background: transparent;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  color: var(--color-text);
  cursor: pointer;
  transition: background 200ms;

  &:hover {
    background: var(--color-decorative-100);
  }
  & svg {
    display: block;
  }
`;
