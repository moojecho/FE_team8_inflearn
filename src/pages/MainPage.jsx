import React from "react";
import Header from "../components/Header/header"
import Banner from "../components/banner/banner"
import Search from "../components/search/search"
import LectureLayout from "../components/lectureList/lectureLayout"
import Footer from "../components/footer/footer"

const MainPage = () => {

  return (
    <div>
      <Header/>
      <Banner/>
      <Search/>
      <LectureLayout/>
      <Footer/>
      </div>
  )
};

export default MainPage;
