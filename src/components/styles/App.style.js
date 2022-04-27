import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
  padding: 2rem;
  overflow: hidden;

  justify-content: start;


  @media(max-width: 500px) {
  
    padding: 0.8rem !important;

  }

`;
