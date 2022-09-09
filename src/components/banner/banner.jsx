import React from "react";
import styled from "styled-components";

const Banner = () => {
  return <BannerLayout></BannerLayout>;
};

export default Banner;

const BannerLayout = styled.div`
min-width:769px;
width:100%;
height:400px;
display: flex;
border:1px solid black;
`;
