import React, { useEffect, useState } from "react";
import instance from "../../shared/api";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        {lectureData.map((list) => (
          <LectureCard key={list.id} >
            <LectureImg src={list.frontLectureImg} />
            <LectureTitle>{list.frontLectureTitle}</LectureTitle>
            <p
              style={{
                fontSize: "14px",
                color: "#808080",
                marginTop: "30px",
                marginLeft: "2px",
                zIndex:"-5",position:"relative"
              }}
            >
              {list.frontInstructor}
            </p>
            <p style={{ marginLeft: "3px" }}>{list.star}</p>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#2565AE",
                marginLeft: "2px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              {list.frontOriginPrice == "무료" ? (
                list.frontOriginPrice
              ) : (
                <OriginPrice>{list.frontOriginPrice}</OriginPrice>
              )}
              <p style={{zIndex:"-5",position:"relative"}}>{list.frontDiscountPrice}</p>
            </div>
          </LectureCard>
        ))}
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

const LectureCard = styled.div`
  margin-right:10px;
  cursor:pointer;

  &:hover {
    width: 225px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.1);
    color: black;
    font-size: 13px;
  }
`;

const LectureImg = styled.img`
  width: 240px;
  height: 157px;
  margin: auto;
  z-index: -5;
  position: relative;
`;

const LectureTitle = styled.p`
  height: 45px;
  font-size: 15px;
  font-weight: bold;
  color: #454545;
  margin-top: 10px;
  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OriginPrice = styled.p`
  color: #595959;
  font-weight: 500;
  font-size: 0.9rem;
  opacity: 0.75;
  margin: 3px;
  text-decoration: line-through;
`;