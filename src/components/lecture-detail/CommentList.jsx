import React from "react";
import styled from "styled-components";
import Star from "./Star";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentList = ({ nickname, comments, onSubmitHandler }) => {
  return (
    <CommentBox>
      <Header>
        <HeaderTitle>수강평</HeaderTitle>
        <HeaderSubTitle>총 66개</HeaderSubTitle>
      </Header>
      <DashBoard>
        <DashBoardStar>
          <DashBoardStarNum>4.8</DashBoardStarNum>
          <Star width={"20px"} height={"20px"} boxWidth={100} score={4.8} />
          <DashBoardStarText>66개의 수강평</DashBoardStarText>
        </DashBoardStar>
        <DashBoardGraph>
          <DashBoardGraphBox>
            <DashBoardGraphScore>5점</DashBoardGraphScore>
            <DashBoardGraphBar>
              <GraphBarBackground />
              <GraphBarValue />
            </DashBoardGraphBar>
          </DashBoardGraphBox>
          <DashBoardGraphBox>
            <DashBoardGraphScore>4점</DashBoardGraphScore>
            <DashBoardGraphBar>
              <GraphBarBackground />
              <GraphBarValue />
            </DashBoardGraphBar>
          </DashBoardGraphBox>
          <DashBoardGraphBox>
            <DashBoardGraphScore>3점</DashBoardGraphScore>
            <DashBoardGraphBar>
              <GraphBarBackground />
              <GraphBarValue />
            </DashBoardGraphBar>
          </DashBoardGraphBox>
          <DashBoardGraphBox>
            <DashBoardGraphScore>2점</DashBoardGraphScore>
            <DashBoardGraphBar>
              <GraphBarBackground />
              <GraphBarValue />
            </DashBoardGraphBar>
          </DashBoardGraphBox>
          <DashBoardGraphBox>
            <DashBoardGraphScore>1점</DashBoardGraphScore>
            <DashBoardGraphBar>
              <GraphBarBackground />
              <GraphBarValue />
            </DashBoardGraphBar>
          </DashBoardGraphBox>
        </DashBoardGraph>
      </DashBoard>
      <ReviewList>
        {nickname ? <CommentForm onSubmitHandler={onSubmitHandler} /> : null}
        {comments?.map((comment) => (
          <Comment {...comment} key={comment.id} />
        ))}
      </ReviewList>
    </CommentBox>
  );
};

export default CommentList;

const CommentBox = styled.section`
  margin: 0 auto;
  padding: 28px 20px;
  max-width: 1200px;
`;

const Header = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: baseline;
`;

const HeaderTitle = styled.span`
  margin-right: 16px;
  color: #343a40;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 22px;
  font-weight: 700;
`;

const HeaderSubTitle = styled.span`
  font-size: 16px;
  color: #adb5bd;
  font-weight: 500;
  font-family: "Noto Sans KR", sans-serif;
`;

const DashBoard = styled.div`
  display: flex;
  height: 180px;
`;

const DashBoardStar = styled.div`
  margin-right: 6px;
  flex: 1;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #e9ecef;
`;

const DashBoardGraph = styled.div`
  flex: 2;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #e9ecef;
`;

const DashBoardStarNum = styled.div`
  margin-bottom: 18px;
  font-size: 36px;
  font-weight: 700;
  color: #343a40;
  font-family: "Noto Sans KR", sans-serif;
`;

const DashBoardStarText = styled.span`
  font-size: 15px;
  color: #adb5bd;
  font-weight: 500;
  font-family: "Noto Sans KR", sans-serif;
`;

const DashBoardGraphBox = styled.div`
  display: flex;
  align-items: center;
`;

const DashBoardGraphScore = styled.span`
  font-size: 15px;
  font-weight: 400;
  margin-right: 8px;
  font-family: "Noto Sans KR", sans-serif;
`;

const DashBoardGraphBar = styled.div`
  width: 360px;
  height: 10px;
  position: relative;
`;

const GraphBarBackground = styled.div`
  width: 360px;
  height: 10px;
  border-radius: 5px;
  background-color: rgb(222, 226, 230);
  position: absolute;
`;

const GraphBarValue = styled.div`
  width: calc(360px * (56 / 66));
  height: 10px;
  border-radius: 5px;
  background-color: rgb(255, 200, 7);
  position: absolute;
`;

const ReviewList = styled.div`
  margin-top: 44px;
  border-top: 1px solid #000a12;
  padding: 32px 0;
`;
