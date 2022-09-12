import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";

const Lecture = () => {
  return (
    <Section>
      <LectureHeader>
        <LectureContainer>
          <ThumbnailContainer>
            <Thunbnail
              src="https://cdn.inflearn.com/public/courses/326905/cover/739f7b4b-1a9f-478f-a6a8-1a13bf58cae3/326905-eng.png"
              alt="thumbnail"
            />
          </ThumbnailContainer>
          <LectureDiscription>
            <BreadCrumb>개발·프로그래밍 프론트엔드</BreadCrumb>
            <Title>만들고 비교하며 학습하는 리액트 (React)</Title>
            <Info>
              <InfoStarBox>
                <InfoStar>
                  <EmptyStar>
                    <AiFillStar style={{ color: "rgb(222, 226, 230)" }} />
                    <AiFillStar style={{ color: "rgb(222, 226, 230)" }} />
                    <AiFillStar style={{ color: "rgb(222, 226, 230)" }} />
                    <AiFillStar style={{ color: "rgb(222, 226, 230)" }} />
                    <AiFillStar style={{ color: "rgb(222, 226, 230)" }} />
                  </EmptyStar>
                  <FillStar>
                    <AiFillStar style={{ color: "rgb(255, 200, 7)" }} />
                    <AiFillStar style={{ color: "rgb(255, 200, 7)" }} />
                    <AiFillStar style={{ color: "rgb(255, 200, 7)" }} />
                    <AiFillStar style={{ color: "rgb(255, 200, 7)" }} />
                    <AiFillStar style={{ color: "rgb(255, 200, 7)" }} />
                  </FillStar>
                </InfoStar>
                <InfoScore>(4.8)</InfoScore>
              </InfoStarBox>
              <CountComment>
                <strong style={{ fontWeight: "700" }}>66개</strong>의 수강평
              </CountComment>
            </Info>
            <Instructor>
              <BsPerson
                style={{ width: "16px", height: "16px", color: "#fff" }}
              />
              <InstructorName>강사명</InstructorName>
              <FaCrown
                style={{ width: "16px", height: "16px", color: "#fff" }}
              />
            </Instructor>
            <div>
              <HiHashtag
                style={{
                  width: "16px",
                  height: "16px",
                  color: "#fff",
                  marginRight: "6px",
                }}
              />
            </div>
          </LectureDiscription>
        </LectureContainer>
      </LectureHeader>
    </Section>
  );
};

export default Lecture;

const Section = styled.section`
  display: block;
`;

const LectureHeader = styled.div`
  padding: 40px 0;
  background-color: #002333; ;
`;

const LectureContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThumbnailContainer = styled.div`
  width: 440px;
  height: 286px;
  position: relative;
`;

const Thunbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const LectureDiscription = styled.div`
  padding: 0 42px 0 24px;
  flex-basis: 58.33333333%;
  max-width: 58.33333333%;
  display: flex;
  flex-direction: column;
`;

const BreadCrumb = styled.span`
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  font-family: "Noto Sans KR", sans-serif;
`;

const Title = styled.span`
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: 40px;
`;

const Info = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
`;

const InfoStarBox = styled.span`
  margin-right: 8px;
  display: flex;
  align-items: center;
  width: 104px;
  height: 20px;
`;

const InfoStar = styled.div`
  width: 70px;
  position: relative;
`;

const InfoScore = styled.strong`
  font-style: inherit;
  font-size: 14px;
  color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
`;

const EmptyStar = styled.div``;

const FillStar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  width: calc(70px * (4.8 / 5));
`;

const CountComment = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  color: #fff;
`;

const Instructor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const InstructorName = styled.span`
  margin: 0 2px 0 6px;
  color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
`;
