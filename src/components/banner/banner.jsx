import React, { useEffect, useState } from "react";
import instance from "../../shared/api";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RightOutlined, LeftOutlined, PauseOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Tab = () => {
  const [eventData, setEventData] = useState([]);
  const [Pause, setPause] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await instance
        .get(`/api/lecture`)
        .then((res) =>
          setEventData(res.data.filter((list) => list.backLevel == "입문"))
        );
    };

    getData();
  }, []);

  console.log(eventData);
  const settings = {
    // customPaging: function (index) {
    //   return (
    //     <a>
    //       <DotDesign>{`sdf`}</DotDesign>
    //     </a>
    //   );
    // },
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: Pause,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // nextArrow: <NextTo></NextTo>,
    // prevArrow: <Pre></Pre>,
  };

  return (
    <DivTab>
      <Slider {...settings}>
        {eventData.map((list) => (
          <div>
            <img
              key={list.lectureId}
              style={{
                width: "100vw",
                height: "320px",
                cursor: "pointer",
              }}
              src={list.frontLectureImg}
            />
          </div>
        ))}
      </Slider>
      <div
        style={{
          border: "1px solid #e9ecef",
          height: "64px",
          marginTop: "-6px",
        }}
      >
        <DotLay>
          <MoveButton>
            <p>{`3 / ${eventData.length}`}</p>
            <LeftOutlined style={{ marginLeft: "25px" }} />
            <PauseOutlined
              style={{ cursor: "pointer" }}
              onClick={() => setPause(!Pause)}
            />
            <RightOutlined style={{ cursor: "pointer" }} />
          </MoveButton>
          <Wall />
        </DotLay>
      </div>
    </DivTab>
  );
};

export default Tab;

const DivTab = styled.div`
  width: 100%;
  height: 384px;

  .slick-dots {
    bottom: -40px;
    left: 15px;
  }

  .slick-prev:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: white; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: white;
  }
`;

const DotDesign = styled.p`
  flex: 0 0 auto;
  padding: 0 1rem;
  width: 50px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: #495057;
  border-radius: 20px;
  box-shadow: inset 0 0 0 1px #ced4da;
  background-color: #fff;
  cursor: pointer;
`;

const DotLay = styled.a`
  max-width: 1200px;
  min-width: 769px;
  margin: auto;
  display: flex;
  justify-content: left;
`;

const MoveButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  width: 135px;
  height: 36px;
  font-size: 0.875rem;
  color: #fff;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-left: 25px;
  margin-top: 12px;
`;

const Wall = styled.div`
    margin: 0 1rem;
    margin-top:13px;
    margin-left:40px;
    width: 1px;
    height: 36px;
    background-color: #dee2e6;
}
`;
