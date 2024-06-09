import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/epilogue";

import { ThemeProviderWrapper } from "./context/theme/themeContext";

import GlobalStyle from "./styles/GlobalStyles";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <ThemeProviderWrapper>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Toaster />
      <GlobalStyle />
    </ThemeProviderWrapper>
  )
}

export default App
