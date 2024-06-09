import { Routes, Route } from "react-router-dom";

import { ThemeProviderWrapper } from "./context/theme/themeContext";

import GlobalStyle from "./styles/GlobalStyles";

import Login from "./pages/Login";

function App() {
  return (
    <ThemeProviderWrapper>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <GlobalStyle />
    </ThemeProviderWrapper>
  )
}

export default App
