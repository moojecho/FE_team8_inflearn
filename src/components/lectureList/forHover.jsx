import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import styled from "styled-components";

const ForHover = ({list}) => {
  const navigate = useNavigate();
  const [hovering, setHovering] = useState('')
  
  return (
    hovering===''?
    <LectureCard onMouseOver={()=> setHovering('0.3')} onMouseOut={()=>setHovering('')} key={list.id}>
      <LectureImg src={list.frontLectureImg} />
      <LectureTitle>{list.frontLectureTitle}</LectureTitle>
      <p
        style={{
          fontSize: "14px",
          color: "#808080",
          marginTop: "30px",
          marginLeft: "2px",
          zIndex: "-5",
          position: "relative",
        }}
      >
        {list.frontInstructor}
      </p>
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
        {list.frontOriginPrice === "무료" ? (
          list.frontOriginPrice
        ) : (
          <OriginPrice>{list.frontOriginPrice}</OriginPrice>
        )}
        <p style={{ zIndex: "-5", position: "relative" }}>
          {list.frontDiscountPrice}
        </p>
      </div>
    </LectureCard> : <LectureBehindCard onClick={()=>navigate(`/lecture/${list.id}`)} onMouseOut={()=>setHovering('')} key={list.id}>
   <LectureBehindTitle>{list.frontLectureTitle}</LectureBehindTitle>
      <LecureBehindDes>📊{list.backLevel}</LecureBehindDes>
      <LecureBehindDes>📘{list.backSkill
}</LecureBehindDes>
  </LectureBehindCard>
  );
};

export default ForHover;

const LectureCard = styled.div`
  width: 225px;
  height: 300px;
  cursor: pointer;
  margin-right: 15px;
  margin-top: 15px;

  &:hover {
    width: 225px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.1);
    color: black;
    font-size: 13px;
  }
`;

const LectureImg = styled.img`
  width: 225px;
  height: 145px;
  margin: auto;
  position: relative;
  z-index: -5;
`;

const LectureTitle = styled.p`
width:100%;
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
width:60px;
  color: #595959;
  font-weight: 500;
  font-size: 0.9rem;
  opacity: 0.75;
  margin: 3px;
  text-decoration: line-through;
`;

const LectureBehindCard = styled.div`
  max-width: 235px;
  width: 235px;
  height: 300px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.8);
`;

const LectureBehindTitle = styled.p`
width:100%;
  font-size: 15px;
  font-weight: bold;
  color: white;
  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px;
`;

const LecureBehindDes = styled.p`
width:100%;
  color: skyblue;
  margin-left: 6px;
`;
