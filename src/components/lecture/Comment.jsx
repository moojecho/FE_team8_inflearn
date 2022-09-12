import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const Comment = () => {
  return (
    <Review>
      <ReviewHeader>
        <ProfileImage
          src="https://cdn.inflearn.com/public/main/profile/default_profile.png"
          alt="profile"
        />
        <UserInfo>
          <StarBox>
            <Star>
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
            </Star>
            <Score>5</Score>
          </StarBox>
          <Name>인프런</Name>
        </UserInfo>
      </ReviewHeader>
      <ReviewBody>강의 정말 유익했습니다.</ReviewBody>
      <ReviewDate>2022-09-12</ReviewDate>
    </Review>
  );
};

export default Comment;

const Review = styled.div`
  border-bottom: 1px solid #f1f3f5;
  padding: 32px 0;
`;

const ReviewHeader = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  margin-right: 8px;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  border: 1px solid #e9ecef;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StarBox = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 4px;
`;

const Star = styled.div`
  width: 70px;
  position: relative;
  margin-right: 2px;
  margin-bottom: 4px;
`;

const EmptyStar = styled.div``;

const FillStar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  width: calc(70px * (5 / 5));
`;

const Score = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #343a40;
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #868e96;
  font-family: "Noto Sans KR", sans-serif;
`;

const ReviewBody = styled.div`
  margin-bottom: 12px;
  color: #495057;
  font-size: 15px;
  white-space: pre-line;
  font-family: "Noto Sans KR", sans-serif;
  line-height: 1.6;
  letter-spacing: -0.3px;
`;

const ReviewDate = styled.span`
  line-height: 1.38px;
  letter-spacing: -0.3px;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  color: #adb5bd;
  font-weight: 500;
  font-family: "Noto Sans KR", sans-serif;
`;
