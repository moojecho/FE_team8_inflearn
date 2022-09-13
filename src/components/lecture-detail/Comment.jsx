import React from "react";
import styled from "styled-components";
import Star from "./Star";

const Comment = ({ content, nickname, star }) => {
  return (
    <Review>
      <ReviewHeader>
        <ProfileImage
          src="https://cdn.inflearn.com/public/main/profile/default_profile.png"
          alt="profile"
        />
        <UserInfo>
          <StarBox>
            <Star width={"14px"} height={"14px"} boxWidth={70} score={star} />
            <Score>{star}</Score>
          </StarBox>
          <Name>{nickname}</Name>
        </UserInfo>
      </ReviewHeader>
      <ReviewBody>{content}</ReviewBody>
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
