import React, { useEffect, useState } from "react";
import instance from "../../shared/api";
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";

const LectureBottom = () => {
  const navigate = useNavigate();
  const [lectureData, setLectureData] = useState([]);

  const getData = async () => {
    await instance
      .get(`/api/lecture`)
      .then((res) =>
        setLectureData(
          res.data.filter((list) => list.backLevel === "중급이상").slice(0, 3)
        )
      );
  };

  useEffect(() => {
    getData();
  }, []);

  const settings = {
    speed: 500,
    slidesToShow: lectureData.length,
    slidesToScroll: lectureData.length,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextTo></NextTo>,
    prevArrow: <Pre></Pre>,
  };

  return (
    <DivTab>
      <Slider {...settings}>
        {lectureData.map((list) => (
          <LectureCard
            onClick={() => navigate(`/lecture/${list.id}`)}
            key={list.id}
          >
            <LectureImg src={list.frontLectureImg}></LectureImg>
            <LectureTitle>{list.frontLectureTitle}</LectureTitle>
          </LectureCard>
        ))}
      </Slider>
    </DivTab>
  );
};

export default LectureBottom;

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
  height: 384px;

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

const LectureCard = styled.div`
  height: 285px;
  cursor: pointer;
  width: 100%;
`;

const LectureImg = styled.img`
  width: 300px;
  height: 157px;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const LectureTitle = styled.p`
  width: 250px;
  margin: auto;
  height: 45px;
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
