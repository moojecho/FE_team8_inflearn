import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import __searchList from "../../redux/modules/lectureSlice";

import LectureItem from "./lectureItem"

const SearchList = () => {
  const lectureList = useSelector((state) => state.lecture.lecture);
  const [lectures, setLectures] = useState([]);
  
  useEffect(() => {
    setLectures(lectureList);
  }, [lectureList]);

  return (
    <ListLayout>
      <p
        style={{
          fontSize: "18px",
          color: "#454545",
          fontWeight: "bold",
          margin: "10px",
        }}
      >
        전체
      </p>
      <ResultLayout>
        {lectures && lectures!=[] ? 
          lectures.map((list) => <LectureItem list={list} />
          )
         : 
          <NoneResult style={{ marginTop: "15px", color: "gray" }}>
            검색 결과를 불러오지 못했어요..😭
          </NoneResult>
        }
      </ResultLayout>
    </ListLayout>
  );
};

export default SearchList;

const ListLayout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const ResultLayout = styled.div`
  max-width: 990px;
  min-width: 500px;
  min-height: 555px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: 1px solid #e4e4e4;
  margin-left: 10px;
`;

const NoneResult = styled.p`
  font-size: 30px;
  display: flex;
  justify-content: start;
`;