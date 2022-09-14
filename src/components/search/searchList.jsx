import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import __searchList from "../../redux/modules/lectureSlice";

const SearchList = () => {
  const lectureList = useSelector((state) => state.lecture.lecture);
  const [lectures, setLectures] = useState([]);
  useEffect(() => {
    setLectures(lectureList);
  }, [lectureList]);

  console.log(lectures);
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
        {lectures ? (
          lectures.map((list) => (
            <LectureCard key={list.id}>
              <LectureImg src={list.lectureImg} />
              <LectureTitle>{list.title}</LectureTitle>
              <p
                style={{
                  fontSize: "14px",
                  color: "#808080",
                  marginTop: "30px",
                  marginLeft: "2px",
                  zIndex: "-5",
                  position: "relative",
                }}
              >
                {list.instructor}
              </p>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#2565AE",
                  marginLeft: "2px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {list.originPrice == "무료" ? (
                  list.originPrice
                ) : (
                  <OriginPrice>{list.originPrice}</OriginPrice>
                )}
                <p style={{ zIndex: "-5", position: "relative" }}>
                  {list.discountPrice}
                </p>
              </div>
            </LectureCard>
          ))
        ) : (
          <NoneResult style={{ marginTop: "15px", color: "gray" }}>
            검색 결과를 불러오지 못했어요..😭
          </NoneResult>
        )}
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

const LectureCard = styled.div`
  width: 225px;
  height: 300px;
  cursor: pointer;
  margin-right: 15px;
  margin-top: 15px;

  &:hover {
    width: 225px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.1);
    color: black;
    font-size: 13px;
  }
`;

const LectureImg = styled.img`
  width: 225px;
  height: 145px;
  margin: auto;
  position: relative;
  z-index: -5;
`;

const LectureTitle = styled.p`
  height: 45px;
  font-size: 15px;
  font-weight: bold;
  color: #454545;
  margin-top: 10px;
  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OriginPrice = styled.p`
  color: #595959;
  font-weight: 500;
  font-size: 0.9rem;
  opacity: 0.75;
  margin: 3px;
  text-decoration: line-through;
`;
