import React from 'react';

import { ErrorMessageContainer } from './styles/ErrorMessage.style';

export default function ({errors, name }) {
  return (
    <ErrorMessageContainer>
      <div>{errors && errors[name]?.message}</div>
    </ErrorMessageContainer>
  );
}
