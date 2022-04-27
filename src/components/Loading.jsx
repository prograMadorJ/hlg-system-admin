import React from 'react';

import { LinearContainer, CircularContainer } from './styles/Loading.style';

export const LinearLoading = ({ color, text, isHidden }) => (
  <LinearContainer
    {...{ color }}
    style={{ visibility: isHidden ? 'hidden' : 'visible' }}
  >
    <span>{text}</span>
    <div>
      <span className="line line__first"></span>
      <span className="line line__second"></span>
    </div>
  </LinearContainer>
);

export const CircularLoading = ({ text, color }) => (
  <CircularContainer {...{ color }}>
    <div>
      <svg viewBox="22 22 44 44">
        <circle
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          stroke-width="3.6"
        ></circle>
      </svg>
    </div>
    <span>{text}</span>
  </CircularContainer>
);
