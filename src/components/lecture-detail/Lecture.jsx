import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import Star from "./Star";

const Lecture = ({
  commentCount,
  entireScore,
  lectureImg,
  title,
  instructor,
  level,
  skill,
}) => {
  const [keywords, setKeywords] = useState(skill);

  useEffect(() => {
    setKeywords(skill);
  }, [skill]);

  return (
    <Section>
      <LectureHeader>
        <LectureContainer>
          <ThumbnailContainer>
            <Thumbnail src={lectureImg} alt="thumbnail" />
          </ThumbnailContainer>
          <LectureDescription>
            <Title>{title}</Title>
            <Info>
              <InfoStarBox>
                <Star
                  width="14px"
                  height="14px"
                  boxWidth={70}
                  score={entireScore}
                />
                <InfoScore>({entireScore})</InfoScore>
              </InfoStarBox>
              <CountComment>
                <strong style={{ fontWeight: "700" }}>{commentCount}개</strong>
                의 수강평
              </CountComment>
            </Info>
            <Instructor>
              <BsPerson
                style={{ width: "16px", height: "16px", color: "#fff" }}
              />
              <InstructorName>{instructor}</InstructorName>
              <FaCrown
                style={{ width: "16px", height: "16px", color: "#fff" }}
              />
            </Instructor>
            <HashTagBox>
              <HiHashtag
                style={{
                  width: "16px",
                  height: "16px",
                  color: "#fff",
                  marginRight: "6px",
                }}
              />
              <Keyword type="button">{level}</Keyword>
              {keywords &&
                keywords
                  .replace(/ /gi, "")
                  .split(",")
                  .map((keyword) => (
                    <Keyword type="button" key={keyword}>
                      {keyword}
                    </Keyword>
                  ))}
            </HashTagBox>
          </LectureDescription>
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

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const LectureDescription = styled.div`
  padding: 0 42px 0 24px;
  flex-basis: 58.33333333%;
  max-width: 58.33333333%;
  display: flex;
  flex-direction: column;
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

const InfoScore = styled.strong`
  font-style: inherit;
  font-size: 14px;
  color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
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

const Keyword = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 12px;
  margin-right: 4px;
  padding: 4px 12px;
  border-radius: 100px;
  background-color: #173f51;
  color: #fff;
  font-weight: 500;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #26556a;
  }
`;

const HashTagBox = styled.div`
  vertical-align: baseline;
  display: flex;
  align-items: center;
`;
