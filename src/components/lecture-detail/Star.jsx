import React from "react";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";

const Star = ({ width, height, boxWidth, score }) => {
  let FillWidth = `${boxWidth * (score / 5)}px`;
  return (
    <DashBoardStarImage style={{ width: `${boxWidth}px` }}>
      <div>
        <AiFillStar
          style={{
            color: "rgb(222, 226, 230)",
            width: width,
            height: height,
          }}
        />
        <AiFillStar
          style={{
            color: "rgb(222, 226, 230)",
            width: width,
            height: height,
          }}
        />
        <AiFillStar
          style={{
            color: "rgb(222, 226, 230)",
            width: width,
            height: height,
          }}
        />
        <AiFillStar
          style={{
            color: "rgb(222, 226, 230)",
            width: width,
            height: height,
          }}
        />
        <AiFillStar
          style={{
            color: "rgb(222, 226, 230)",
            width: width,
            height: height,
          }}
        />
      </div>
      <FillStar width={FillWidth}>
        <AiFillStar
          style={{
            color: "rgb(255, 200, 7)",
            width: width,
            height: height,
          }}
        />
        <AiFillStar
          style={{
            color: "rgb(255, 200, 7)",
            width: width,
            height: height,
          }}
        />
        <AiFillStar
          style={{
            color: "rgb(255, 200, 7)",
            width: width,
            height: height,
          }}
        />
        <AiFillStar
          style={{
            color: "rgb(255, 200, 7)",
            width: width,
            height: height,
          }}
        />
        <AiFillStar
          style={{
            color: "rgb(255, 200, 7)",
            width: width,
            height: height,
          }}
        />
      </FillStar>
    </DashBoardStarImage>
  );
};

export default Star;

const DashBoardStarImage = styled.div`
  position: relative;
`;

const FillStar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  width: ${(props) => props.width};
`;
