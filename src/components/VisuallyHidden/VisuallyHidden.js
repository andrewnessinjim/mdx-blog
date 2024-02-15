import React from 'react';

import { StWrapper } from './VisuallyHidden.styled';

function VisuallyHidden({
  as: Element = 'span',
  children,
  ...delegated
}) {
  return (
    <StWrapper
      as={Element}
      {...delegated}
    >
      {children}
    </StWrapper>
  );
}

export default VisuallyHidden;
