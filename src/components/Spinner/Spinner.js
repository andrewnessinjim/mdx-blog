import React from 'react';
import { Loader } from 'react-feather';

import { StWrapper } from './Spinner.styled';

const Spinner = ({ color, size }) => {
  return (
    <StWrapper>
      <Loader color={color} size={size} />
    </StWrapper>
  );
};

export default Spinner;
