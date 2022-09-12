import React from "react";
import Header from "../components/Header/header";
import CommentList from "../components/lecture/CommentList";
import Discription from "../components/lecture/Discription";
import Lecture from "../components/lecture/Lecture";

const LecturePage = () => {
  return (
    <>
      <Header />
      <Lecture />
      <Discription />
      <CommentList />
    </>
  );
};

export default LecturePage;
