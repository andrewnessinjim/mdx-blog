import React from 'react';

import Slider from '@/components/Slider';
import { StHeader, StLabel, StValue, StWrapper } from './SliderControl.styled';

function SliderControl({ label, value, ...delegated }) {
  const id = React.useId();

  return (
    <StWrapper>
      <StHeader>
        <StLabel htmlFor={id}>
          {label}
        </StLabel>
        <StValue>{value}</StValue>
      </StHeader>
      <Slider {...delegated} value={value} id={id} />
    </StWrapper>
  );
}

export default SliderControl;
