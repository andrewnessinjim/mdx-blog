import React from 'react';
import { StWrapper } from './Card.styled';

function Card({ children, ...delegated }) {
  return (
    <StWrapper {...delegated}>
      {children}
    </StWrapper>
  );
}

export default Card;
