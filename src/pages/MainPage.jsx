import React from "react";
import Header from "../components/Header/header";
import Banner from "../components/banner/banner";
import Search from "../components/search/search";
import LectureLayout from "../components/lectureList/lectureLayout";
import Footer from "../components/footer/footer";
import styled from "styled-components";

const MainPage = () => {
  return (
    <div>
      <MainLayout>
        <Header />
      </MainLayout>
      <Banner />
      <MainLayout>
        <Search />
        <LectureLayout />
      </MainLayout>
      <Footer />
    </div>
  );
};

export default MainPage;

const MainLayout = styled.div`
  max-width: 1200px;
  min-width: 769px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
