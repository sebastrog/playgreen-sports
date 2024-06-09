import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { ThemeProviderWrapper } from "./context/theme/themeContext";

import GlobalStyle from "./styles/GlobalStyles";

import Login from "./pages/Login";

function App() {
  return (
    <ThemeProviderWrapper>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Toaster />
      <GlobalStyle />
    </ThemeProviderWrapper>
  )
}

export default App
