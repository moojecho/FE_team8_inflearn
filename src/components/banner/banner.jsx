import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  RightOutlined,
  LeftOutlined,
  PauseOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const Tab = () => {
  const [pause, setPause] = useState(true);

  const settings = {
    dots: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: pause,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <DivTab>
       <Slider {...settings}>
      <BannerLay1>
        <Layout>
          <BannerTitle>{"2022 inflearn 풍성한 추석 위크🌕"}</BannerTitle>
          <BannerText>{"매일 성장하는 나를 만드는 시간"}</BannerText>
          <ImgLay>
            <BannerImage
              src={
                "https://cdn.inflearn.com/public/main_sliders/7765380f-60ad-4ed5-95e2-5f63dbe45372/%5B%EC%9D%B4%EB%B2%A4%ED%8A%B8%5D2022chuseok_main_521.png"
              }
            />
          </ImgLay>
        </Layout>
      </BannerLay1>
      <BannerLay2>
        <Layout>
          <BannerTitle style={{ color: "white", width: "490px" }}>
            {"INFCON 2022의 뜨거웠던 열기! 온라인에서 다시 만나보세요🔥"}
          </BannerTitle>
          <BannerText style={{ color: "white", width: "220px" }}>
            {"오프닝부터 발표 세션 영상 28개, 토크 콘서트 영상과 클로징까지!"}
          </BannerText>
          <ImgLay>
            <BannerImage
              src={
                "https://cdn.inflearn.com/public/main_sliders/c3462988-8fc9-4a0a-84ff-56380503be7d/INFCON_main_521.png"
              }
            />
          </ImgLay>
        </Layout>
      </BannerLay2>
      <BannerLay3>
        <Layout>
          <BannerTitle style={{ width: "490px" }}>
            {"무슨 강의 들을지 고민이라면? 현직자 Top 50 먼저 보기👀"}
          </BannerTitle>
          <BannerText style={{ width: "130px" }}>
            {"입문부터 실전까지! 믿고 보는 실무자 Pick"}
          </BannerText>
          <ImgLay>
            <BannerImage
              src={
                "https://cdn.inflearn.com/public/main_sliders/7f3b415a-7267-49fc-9c68-9926b8c5f600/%5B22%E1%84%90%E1%85%A2%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC%5Db2b_top50_main_521.gif"
              }
            />
          </ImgLay>
        </Layout>
      </BannerLay3>
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
            <p>{`3 / 3`}</p>
            <LeftOutlined  style={{ marginLeft: "25px",cursor: "pointer" }} />
            {pause? (
              <PauseOutlined
                style={{ cursor: "pointer" }}
                onClick={() => setPause(!pause)}
              />
            ) : (
              <CaretRightOutlined
                style={{ cursor: "pointer" }}
                onClick={() => setPause(!pause)}
              />
            )}
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
  height: 100%;

  .slick-dots {
    bottom: -40px;
    left: 15px;
  }
`;

const DotLay = styled.div`
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
  margin-top: 15px;
  cursor:pointer;
`;

const Wall = styled.div`
    margin: 0 1rem;
    margin-top:15px;
    margin-left:40px;
    width: 1px;
    height: 36px;
    background-color: #dee2e6;
}
`;

const BannerLay1 = styled.div`
  width:100%;
  height: 320px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: -5;
  background-color: #ffecbe;
`;

const BannerLay2 = styled.div`
width:100%;
  height: 320px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: -5;
  background-color: black;
`;

const BannerLay3 = styled.div`
width:100%;
  height: 320px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: -5;
  background-color: #d2d9dd;
`;
const ImgLay = styled.div`
  width: 736px;
  height: 320px;
  cursor: pointer;
  margin: auto;
  margin-right: 75px;
  z-index: 5;
  position: relative;
  margin-top: 45px;
`;

const Layout = styled.div`
  width: 1200px;
  margin: auto;
  height: 200px;
  margin-top: -45px;
`;

const BannerImage = styled.img`
  width: 736px;
  height: 320px;
  margin-top: -265px;
  margin-bottom: -15px;
  margin-left: 70px;
`;

const BannerTitle = styled.p`
  width: 350px;
  font-size: 35px;
  font-weight: bold;
  margin-top: 125px;
  position: relative;
  z-index: 6;
`;

const BannerText = styled.p`
width:100%;
  margin-top: 12px;
  font-size: 15px;
  z-index: 5;
  position: relative;
`;

