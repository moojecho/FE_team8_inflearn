import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <DivApp>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </DivApp>
  );
}

const DivApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export default App;
