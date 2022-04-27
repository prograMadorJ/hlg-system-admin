import styled from 'styled-components';

import { primary, secondary, white, black, textBlack } from './index';

const buttonDefault = `
  border-radius: 50px;
  padding: 8px 30px;
  font-size: 18px;
  cursor: pointer;
  border: solid 1px #ccc;
  color: ${textBlack};

  &:hover {
    background-color: #eee;
  }

  &:active {
    background-color: #ccc;
  }
`;

export const buttonPrimary = `
  ${buttonDefault}

  background: ${primary};
  color: ${white};
  border: solid 1px ${primary};

  &:hover {
    background-color: ${primary}e5;
  }

  &:active {
    background-color: ${primary};
  }


`;

export const buttonSecondary = `
  ${buttonDefault}
  
  background: ${secondary};
  color: ${black};
  border: solid 1px ${secondary};

  &:hover {
    background-color: ${secondary}cc;
  }

  &:active {
    background-color: ${secondary};
  }


`;

export const buttonDisabled = `
  ${buttonDefault}

  background: ${secondary}77;
  border: solid 1px ${secondary};
  color: ${black}4;

  &:hover {
    background-color: ${secondary}77;
  }

  &:active {
    background-color: ${secondary}77;
  }

  cursor: default;

`;

function getStyleButton(value) {
  switch (value) {
    case 'primary':
      return buttonPrimary;
    case 'secondary':
      return buttonSecondary;
  }

  return buttonDefault;
}

export const Button = styled.button`
  ${(props) => (props?.disabled ? buttonDisabled : getStyleButton(props?.styleButton))}
`;
