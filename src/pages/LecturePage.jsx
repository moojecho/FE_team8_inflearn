import React, { useState, useEffect } from "react";
import Header from "../components/Header/header";
import CommentList from "../components/lecture-detail/CommentList";
import Description from "../components/lecture-detail/Description";
import Lecture from "../components/lecture-detail/Lecture";
import { getCookie } from "../shared/cookie";
import axios from "axios";
import instance from "../shared/api";
import { useParams } from "react-router-dom";

const LecturePage = () => {
  const nickname = getCookie("nickname");
  const param = useParams();

  const getlecture = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_URL + "/api/lecture/" + param.id
    );
    setLecture(data.data);
  };
  const [lecture, setLecture] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [entireScore, setEntireScore] = useState(0);

  const getComments = async () => {
    const { data } = await axios.get(process.env.REACT_APP_URL + "/api/review");
    const reviews = Array.from(data.data).filter(
      (comment) => comment.lectureId === Number(param.id)
    );
    setComments(reviews);
    setCommentCount(Array.from(reviews).length);
    if (Array.from(reviews).length === 0) {
      setEntireScore(0);
    } else {
      setEntireScore(
        Math.floor(
          (reviews
            .map((comment) => comment.star)
            .reduce((arr, cur) => arr + cur, 0) /
            Array.from(reviews).length) *
            10
        ) / 10
      );
    }
  };

  const onSubmitHandler = async (payload) => {
    try {
      const response = await instance.post("/api/auth/review", payload);
      alert("수강평 등록 완료!");
      setComments([...comments, response.data.data]);
      setCommentCount(commentCount + 1);
      setEntireScore(
        Math.floor(
          ((comments
            .map((comment) => comment.star)
            .reduce((arr, cur) => arr + cur, 0) +
            response.data.data.star) /
            (Array.from(comments).length + 1)) *
            10
        ) / 10
      );
    } catch (err) {
      alert(err.message);
    }
  };

  const onEditHandler = async (payload) => {
    try {
      const response = await instance.put(
        `/api/auth/review/${payload[0].id}`,
        payload[0]
      );
      alert("수강평 수정 완료!");
      const newComments = comments.map((comment) =>
        comment.id === response.data.data.id
          ? (comment = response.data.data)
          : comment
      );
      setComments(newComments);
      setEntireScore(
        Math.floor(
          (newComments
            .map((comment) => comment.star)
            .reduce((arr, cur) => arr + cur, 0) /
            Array.from(newComments).length) *
            10
        ) / 10
      );
    } catch (err) {
      alert(err.message);
    }
  };

  const onDeleteHandler = async (payload) => {
    try {
      await instance.delete(`/api/auth/review/${payload}`, payload);
      const newComments = comments.filter((comment) => comment.id !== payload);
      setComments(newComments);
      setCommentCount(commentCount - 1);
      if (newComments.length === 0) {
        setEntireScore(0);
      } else {
        setEntireScore(
          Math.floor(
            (newComments
              .map((comment) => comment.star)
              .reduce((arr, cur) => arr + cur, 0) /
              Array.from(newComments).length) *
              10
          ) / 10
        );
      }
      alert("수강평이 삭제되었습니다!");
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getComments();
    getlecture();
  }, []);

  return (
    <>
      <Header />
      <Lecture
        commentCount={commentCount}
        entireScore={entireScore}
        {...lecture}
      />
      <Description description={lecture.description} />
      <CommentList
        nickname={nickname}
        comments={comments}
        onSubmitHandler={onSubmitHandler}
        commentCount={commentCount}
        entireScore={entireScore}
        onEditHandler={onEditHandler}
        onDeleteHandler={onDeleteHandler}
        lectureId={lecture.id}
      />
    </>
  );
};

export default LecturePage;
