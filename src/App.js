import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import LecturePage from "./pages/LecturePage";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUpPage";
import SearchListPage from "./pages/SearchListPage";
import KaKao from "./components/sign-in/KaKao";

function App() {
  return (
    <DivApp>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lecture/:id" element={<LecturePage />} />
        <Route path="/search" element={<SearchListPage />} />
        <Route path="/oauth/callback/kakao" element={<KaKao />} />
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
