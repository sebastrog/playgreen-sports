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
    background-color: ${(props) => props.theme.colors.background};
    font-family: 'Epilogue Variable', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'DM Sans Variable', sans-serif;
  }
`

export default GlobalStyle;