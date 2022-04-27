import styled from 'styled-components';

import { white } from './index';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .logo {
    display: block;
  }

  @media(max-width: 700px) {
  
    .logo {
      height: 30px;
    }

  }

  @media(max-width: 500px) {
  
    .logo {
      height: 19px;
    }

  }
`;

export const Title = styled.div`
  display: flex;
  font-size: 2rem;
  color: ${white};
  margin-left: 1rem;

  @media(max-width: 1024px) {
    margin: 0;
  }

  @media(max-width: 500px) {
    font-size: 1rem;
  }

`;

export const MenuContainer = styled.div`
  display: flex;
  margin-left: 1rem;

  ul {
    display: flex;
    list-style: none;
    li {
      padding: 0 0.4rem;
      a { 
        color: ${white} 
      };
    }

    .btn-menu {
      display: none;
    }
  }



  @media(max-width: 600px) {

    ul {
      padding: 0.3rem 0.5rem;
      border-radius: 100px;
      li {
        display: none;
        a { 
          color: ${white} 
        };
      }

      .btn-menu {
        display: flex;
        background: transparent;
        color: ${white};
        cursor: pointer;
      }

      &:active {
        background: #ccc3;
      }

    }

  }
`;
