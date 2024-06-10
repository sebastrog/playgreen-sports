import styled from "styled-components"

export const NotSportsFound = styled.div`
  height: 490px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NotSportsFoundText = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};

  a {
    color: ${(props) => props.theme.colors.text};
  }
`