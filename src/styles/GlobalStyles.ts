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
    margin: 0;
    display: flex;
    place-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'DM Sans Variable', sans-serif;
  }

  .main-wrapper {
    width: 300px;
    margin: 0 auto;
    position: relative;
    padding: 20px;

    @media (min-width: 360px) {
      width: 350px;
    }

    @media (min-width: 560px) {
      width: 460px;
    }

    @media (min-width: 1023px) {
      width: 680px;
    }
  }
`

export default GlobalStyle;