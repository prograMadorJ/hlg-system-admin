import React from 'react';

import { Button } from './styles/Button.style';

export default function (props) {
  return <Button styleButton={props?.styleButton} {...props}>{props.children}</Button>;
}
