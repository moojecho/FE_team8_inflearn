import React from "react";
import styled from "styled-components";

import Header from "../components/Header/header"
import Tab from "../components/search/tab"
import SearchList from "../components/search/searchList"
import Footer from "../components/footer/footer"

const SearchListPage = () => {
  return (
    <>
    <Header />
    <SearchLayout>
      <Tab />
      <SearchList/>
      </SearchLayout>
      <Footer/>
    </>
  );
};

export default SearchListPage;


const SearchLayout = styled.div`
max-width:1200px;
margin:auto;
display:flex;
justify-content: start;
flex-direction: row;
margin-top:30px;
`;