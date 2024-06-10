import styled, { css } from 'styled-components';

export const ThemeModeContainer = styled.button`
  width:46px;
  height:46px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.modeBox};
  border: 0;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 20;
  cursor: pointer;

  img {
    width: 20px;
  }
`
export const CardList = styled.div`
  height: 490px;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 30px 15px;
`

const buttonStyles = css`
  display: flex;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.7;
    cursor: unset;
  }

  svg {
    path {
      transition: fill 0.3s ease;
    }
  }
`;

export const DislikeBtn = styled.button`
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.actionDislike};
  ${buttonStyles};
  transition: transform 0.1s ease;

  svg {
    width: 12px;
  }
`
export const LikeBtn = styled.button`
  width: 45px;
  height: 45px;
  background: rgb(35,107,254);
  background: linear-gradient(90deg, rgba(35,107,254,1) 0%, rgba(13,78,211,1) 50%);
  ${buttonStyles};
  transition: transform 0.1s ease;

  svg {
    width: 22px;
  }
`