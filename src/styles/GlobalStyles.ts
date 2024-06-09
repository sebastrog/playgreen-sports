import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    line-height: 1.3;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #eee;
    background-color: ${(props) => props.theme.colors.background};
  }
`

export default GlobalStyle;