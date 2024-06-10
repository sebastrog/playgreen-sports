import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/epilogue";

import { ThemeProviderWrapper } from "./context/theme/themeContext";

import GlobalStyle from "./styles/GlobalStyles";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import ProtectedRoute from "./components/PotectedRoute";

function App() {
  return (
    <ThemeProviderWrapper>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Toaster />
      <GlobalStyle />
    </ThemeProviderWrapper>
  )
}

export default App
