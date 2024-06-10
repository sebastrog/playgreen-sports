import styled, { keyframes } from "styled-components";
import { baseColors } from "../../../styles/theme";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const CardContainer = styled.div`
  height: 490px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    animation: ${fadeIn} .5s ease-in-out;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8883928571428571) 50%);
    z-index: 15;
  }
`

export const Title = styled.h3`
  color: ${baseColors.snowWhite};
  font-size: 34px;
  position: absolute;
  bottom: 15px;
  left: 15px;
  z-index: 20;
`