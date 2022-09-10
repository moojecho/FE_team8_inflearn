import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <DivApp>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </DivApp>
  );
}

const DivApp = styled.div`
  width: 100%;
  height: 100vh;
  margin:0;
  padding:0;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display:none // chrome 아래 스크롤 없애는 코드
`;

export default App;

