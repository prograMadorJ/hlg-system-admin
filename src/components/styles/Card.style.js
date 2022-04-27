import styled from 'styled-components';

import { whiteSecondary, textBlack } from './index';

export const CardContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  background: ${whiteSecondary};
  box-shadow: 0 3px 12px -4px #0005;
  border-radius: 10px;
  min-height: 200px;

  margin-top: 1rem;

  > * {
    color: ${textBlack}
  }

  .container {
    margin: 1.5rem;
    background: inherit;
    width: 100%;
  }


`;
