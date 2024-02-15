"use client";

import styled from "styled-components";

export const StWrapper = styled.input`
  --handle-width: 12px;
  --handle-height: 24px;
  --track-color: var(--color-gray-500);
  --handle-color: var(--color-text);
  --handle-active-color: var(--color-primary);
  --background-color: var(--color-card-background);
  display: block;
  width: 100%;
  height: var(--handle-height);
  background: transparent;
  appearance: none;
  outline-offset: 6px;
  cursor: pointer;
  width: 250px;

  &::-webkit-slider-thumb {
    appearance: none;
    width: var(--handle-width);
    height: var(--handle-height);
    border-radius: 50px;
    background: var(--color-gray-900);
    cursor: grab;
    transform: translateY(calc(-50% + 1.5px));
    outline: 2px solid var(--background-color);
  }

  &:active::-webkit-slider-thumb {
    cursor: grabbing;
  }

  &:focus::-webkit-slider-thumb {
    background: var(--handle-active-color);
  }

  &::-webkit-slider-runnable-track {
    width: calc(100% - 1.5rem);
    height: 3px;
    background: var(--track-color);
    border-radius: 1.5px;
    margin: calc(var(--handle-size) / 2) 0;
  }

  &::-moz-range-track {
    background: var(--track-color);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
