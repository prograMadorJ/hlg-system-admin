import React from 'react';

import { SnackbarContainer } from './styles/Snackbar.style';

export default function (props) {
  return <SnackbarContainer className={props.show ? 'show' : ''} {...props}>{props.children}</SnackbarContainer>;
}
