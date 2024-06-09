import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyles";

import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <GlobalStyle />
    </>
  )
}

export default App
