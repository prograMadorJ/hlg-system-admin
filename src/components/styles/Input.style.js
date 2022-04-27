import styled from 'styled-components';

import { white, textBlack, black, primary, errorColor } from './index';

export const InputSimple = styled.input`
    border: solid 1px ${black}7;
    border-radius: 50px;
    font-size: 1.2rem;
    background: ${white};
    color: ${textBlack};
    width: calc(100% - 1.5rem);
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    margin: 0;

    &:focus-visible {
      outline: 0;
      ${({isError}) => isError 
        ? `border: solid 1px ${errorColor}9;
           box-shadow: 0 0 6px -3px ${errorColor}9;` 
        : `border: solid 1px ${primary}77;
           box-shadow: 0 0 6px -3px ${primary};`
      }
      
    }
`;

export const InputLeftIcon = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  .icon {
    background: ${black}1;
    border: solid 1px ${black}7;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    border-top-left-radius: 1.2rem;
    border-bottom-left-radius: 1.2rem;
    border-right: 0;

    i {
      color: ${black};
      margin-left: 5px;
    }
  }

  .field {
    width: 85%;
    input {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  &:focus-within {
  .icon {
    outline: 0;
    ${({isError}) => isError 
        ? `border: solid 1px ${errorColor}9;
           box-shadow: 0 0 6px -3px ${errorColor}9;` 
        : `border: solid 1px ${primary}77;
           box-shadow: 0 0 6px -3px ${primary};`
      }
      border-right: 0;
    }
  }
`;

export const InputRightIcon = styled(InputLeftIcon)`
  flex-direction: row-reverse;

  .icon {
    border: solid 1px ${black}7;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 1.2rem;
    border-bottom-right-radius: 1.2rem;
    border-left: 0px;

    i {
      margin-right: 5px;
    }
  }

  .field {
    input {
      border-top-left-radius: 1.2rem;
      border-bottom-left-radius: 1.2rem;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }

  &:focus-within {
    .icon {
      outline: 0;
      ${({isError}) => isError 
        ? `border: solid 1px ${errorColor}9;
           box-shadow: 0 0 6px -3px ${errorColor}9;` 
        : `border: solid 1px ${primary}77;
           box-shadow: 0 0 6px -3px ${primary};`
      }
        border-left: 0;
      }
    }

`;
