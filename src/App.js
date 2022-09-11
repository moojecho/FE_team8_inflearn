import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUpPage";

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
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;

export default App;
