import React, { useEffect, useState } from "react";
import instance from "../../shared/api";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ForHover from "./forHover"

import {__getLectureList} from "../../redux/modules/lectureSlice"

import styled from "styled-components";

const Tab = () => {
  const [lectureData, setLectureData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await instance
        .get(`/api/lecture`)
        .then((res) =>
          setLectureData(res.data.filter((list) => list.backLevel == "입문"))
        );
    };

    getData();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextTo></NextTo>,
    prevArrow: <Pre></Pre>,
  };

  return (
    <DivTab>
      <Slider {...settings}>
        {lectureData.map((list) => <ForHover list={list}/> )}
      </Slider>
    </DivTab>
  );
};

export default Tab;

const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: -5%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: -3%;
  z-index: 3;
`;

const DivTab = styled.div`
  width: 100%;

  .slick-prev:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: gray; // 버튼 색은 검은색으로
    font-size: 50px;
  }
  .slick-next:before {
    opacity: 1;
    color: gray;
    font-size: 50px;
  }
`;