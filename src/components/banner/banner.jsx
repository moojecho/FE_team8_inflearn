import React, { useEffect, useState } from "react";
import instance from "../../shared/api";

import BannerImg from "./bannerImg";

import {
  RightOutlined,
  LeftOutlined,
  PauseOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const Tab = () => {
  const [eventData, setEventData] = useState([]);
  const [Pause, setPause] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await instance
        .get(`/api/banner`)
        .then((res) => setEventData(res.data.slice(0, 9)));
    };

    getData();
  }, []);

  return (
    <DivTab>
      <BannerImg />
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
            <LeftOutlined style={{ marginLeft: "25px" }} />
            {Pause == true ? (
              <PauseOutlined
                style={{ cursor: "pointer" }}
                onClick={() => setPause(!Pause)}
              />
            ) : (
              <CaretRightOutlined
                style={{ cursor: "pointer" }}
                onClick={() => setPause(!Pause)}
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
  margin-top: 15px;
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
