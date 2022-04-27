import styled from 'styled-components';

export const LinearContainer = styled.div`
  text-align: left;
  span {
    font-size: 13px;
  }
  > div {
    margin-top: 8px;
    position: relative;
    overflow: hidden;
    display: block;
    height: 4px;
    border-radius: 4px;
    z-index: 0;
    background-color: ${({color}) => color ? color : '#1976d2'}66;

    .line {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      transition: transform 0.2s linear;
      transform-origin: left;
      background-color: ${({color}) => color ? color : '#1976d2'};
      width: auto;

      &__first {
        animation: animation-first 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      }


      &__second {
        animation: animation-second 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      }
    }
  }

  @keyframes animation-first {
    0% {
      left: -35%;
      right: 100%;
    }
    60% {
      left: 100%;
      right: -90%;
    }
    100% {
      left: 100%;
      right: -90%;
    }

  }

  @keyframes animation-second {
    0% {
      left: -200%;
      right: 100%;
    }
    60% {
      left: 107%;
      right: -8%;
    }
    100% {
      left: 107%;
      right: -8%;
    }
  }

`;

export const CircularContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  span {
    margin-top: 12px;
    font-size: 13px;
  }

  > div {
    display: flex;
    color: ${({color}) => color ? color : '#1976d2'};
    width: 40px;
    animation: circular-loading 1.4s linear infinite;
  }
  svg {
    display: block;
    
    circle {
      stroke: currentColor;
      stroke-dasharray: 80px,200px;
      stroke-dashoffset: 0;
      animation: ${({disableShrink}) => disableShrink ? 'none' : 'circle-shrink 1.4s ease-in-out infinite'};
    }
  }

  @keyframes circular-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes circle-shrink {
    0% {
      stroke-dasharray: 1px,200px;
      stroke-dashoffset: 0;
    }
    
    50% {
        stroke-dasharray: 100px,200px;
        stroke-dashoffset: -15px;
    }
    100% {
        stroke-dasharray: 100px,200px;
        stroke-dashoffset: -125px;
    }
  }

`;
