import styled from 'styled-components';

import { white } from '../../components/styles/index';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  * {
    color: ${white};
  };

  img {
    height: 26px;
  }

  @media(max-width: 500px) {
    img {
      height: 25px;
    }
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
  width: 30%;
  min-width: 320px;
  margin: 0 auto;

  .card {
    text-align: center;

    h2 {
      font-weight: 400;
    }
  }

  .form-controls, .field-container {
    margin-left: 0!important;
    margin-right: 0!important;
  }

  .field-container {
    margin-bottom: 3rem!important;
  }
`;

export const Title = styled.h1`
  margin-left: 1rem;

  @media(max-width: 980px) {
    font-size: 1rem;
  }
`;
