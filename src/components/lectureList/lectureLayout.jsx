import axios from "axios";
import React from "react";
import LectureList from "./lectureList"
import styled from "styled-components";

const LectureLayout = () => {
  return (
    <LectureLay>
      <ListTitle>
        <p>이런 강의들이 있어요..!📗</p>
        <p style={{ fontSize: "15px", opacity: "0.6" }}>
          쉬운 강의들로 추려봤어요
        </p>
      </ListTitle>
      <Lecture>
        <LectureList/>
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
`;

const Lecture = styled.div`
  width: 100%;
  height: 500px;
`;
