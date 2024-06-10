import styled from "styled-components";

export const CardContainer = styled.div`
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.miniCard};
`
export const CardHero = styled.div`
  height: 100%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 80%;
  background-color: #ffffff;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position:absolute;
    left: 0;
    top: 0;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    z-index: 15;
  }
`

export const Title = styled.h3`
  color: #ffffff;
  font-size: 24px;
  position: relative;
  z-index: 20;
  padding: 15px;
`

export const CardStatus = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`