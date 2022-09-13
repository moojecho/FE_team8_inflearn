import React, { useState, useEffect } from "react";
import Header from "../components/Header/header";
import CommentList from "../components/lecture-detail/CommentList";
import Discription from "../components/lecture-detail/Discription";
import Lecture from "../components/lecture-detail/Lecture";
import { getCookie } from "../shared/cookie";
import instance from "../shared/api";

const LecturePage = () => {
  const nickname = getCookie("nickname");
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [entireScore, setEntireScore] = useState(0);
  // let commentCount = Array.from(comments).length;
  // let entireScore = (
  //   Array.from(comments)
  //     .map((comment) => comment.star)
  //     .reduce((arr, cur) => arr + cur, 0) / commentCount
  // ).toFixed(1);
  const getComments = async () => {
    const { data } = await instance.get("/api/review");
    setComments(data.data);
    setCommentCount(Array.from(data.data).length);
    const score =
      Math.round(
        (data.data
          .map((comment) => comment.star)
          .reduce((arr, cur) => arr + cur, 0) /
          Array.from(data.data).length) *
          10
      ) / 10;
    setEntireScore(score);
  };

  const onSubmitHandler = async (payload) => {
    try {
      const response = await instance.post("/api/auth/review", payload);
      alert("수강평 등록 완료!");
      setComments([...comments, response.data.data]);
      setCommentCount(commentCount + 1);
      setEntireScore(entireScore + response.data.data.star);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <Header />
      <Lecture commentCount={commentCount} entireScore={entireScore} />
      <Discription />
      <CommentList
        nickname={nickname}
        comments={comments}
        onSubmitHandler={onSubmitHandler}
      />
    </>
  );
};

export default LecturePage;
