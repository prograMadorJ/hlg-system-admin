import React from 'react';

import { CardContainer } from './styles/Card.style';

export default function ({ children }) {
  return (
    <CardContainer className="card">
      <div className="container">{children}</div>
    </CardContainer>
  );
}
