import styled from 'styled-components';

import { errorColor } from '../../styles/index';

export const ErrorMessageContainer = styled.div`
  & > div {
    margin-top: 3px;
    margin-left: 18px;
    color: ${errorColor}c;
    font-size: 13px;
    text-align: left;
  }

`;
