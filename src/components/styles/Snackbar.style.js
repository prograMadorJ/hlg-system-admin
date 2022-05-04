import styled from 'styled-components';

export const SnackbarContainer = styled.div`
  padding: 6px 16px;
  margin: 0 auto;
  min-height: auto;
  min-width: 288px;
  border-radius: 4px;

  font-size: 14px;
  line-height: 28px;

  background: #4b5;
  color: #f4f4f4;
  box-shadow: 0 0 20px -8px #000c;

  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%) translateY(-10%);
  opacity: 0;

  transition: all .3s ease;

  &.show {
    transform: translateX(50%) translateY(-40%);
    opacity: 1;
  }

`;
