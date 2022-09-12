import React from "react";
import LectureList from "./lectureList";
import LectureMiddle from "./lectureMiddle";
import LectureBottom from "./lectureBottom";
import styled from "styled-components";

const LectureLayout = () => {
  return (
    <LectureLay>
      <ListTitle>
        <p>왕초보도 할 수 있어요☠️</p>
        <p style={{ fontSize: "15px", opacity: "0.6" }}>
          쉬운 강의들로 추려봤어요
        </p>
      </ListTitle>
      <Lecture>
        <LectureList />
      </Lecture>

      <ListTitle>
        <p>기초 적응이 됐다면 이거로 시작해볼까요?😈</p>
        <p style={{ fontSize: "15px", opacity: "0.6" }}>
          쉬운 강의들로 추려봤어요
        </p>
      </ListTitle>
      <Lecture>
        <LectureMiddle />
      </Lecture>

      <ListTitle>
        <p>기본부터 실무까지 제시해주는 로드맵🚕</p>
        <p style={{ fontSize: "15px", opacity: "0.6" }}>
          쉬운 강의들로 추려봤어요
        </p>
      </ListTitle>
      <Lecture>
        <LectureBottom />
      </Lecture>
    </LectureLay>
  );
};

export default LectureLayout;

const LectureLay = styled.div`
  width: 1210px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const ListTitle = styled.div`
  font-size: 23px;
  font-weight: bold;
  margin-bottom:20px;
`;

const Lecture = styled.div`
  width: 100%;
  height: 350px;
`;
