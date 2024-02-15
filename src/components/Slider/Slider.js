import React from 'react';
import { StWrapper } from './Slider.styled';

function Slider({ ...delegated }) {
  return (
    <StWrapper
      type="range"
      {...delegated}
    />
  );
}

export default Slider;
