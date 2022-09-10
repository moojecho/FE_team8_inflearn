import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LectureList = () => {
  const [lectureData, setLectureData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:3001/data`)
        .then((res) => setLectureData(res.data));
    };

    getData();
  }, []);

  console.log(lectureData);
  return (
    <CardLayout>
      {lectureData.map((list) => (
        <LectureCard>
          <LectureImg>{list.imageFile}</LectureImg>
          <p style={{ fontSize: "18px", fontWeight: "bold", marginLeft:"2px"  }}>{list.title}</p>
          <p style={{ fontSize: "14px", color: "#808080", marginTop:"30px", marginLeft:"2px" }}>{list.lecturer}</p>
          <p style={{ marginLeft:"3px" }}>{list.star}</p>
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#2565AE", marginLeft:"2px"  }}>
            {list.price}
          </p>
        </LectureCard>
      ))}
    </CardLayout>
  );
};

export default LectureList;

const CardLayout = styled.div`
  justify-content:center;
  display:flex;
  flex-wrap:wrap;
  flex-direction: row;
  
`;

const LectureCard = styled.div`
  width: 235px;
  height: 285px;
  border: 2px solid black;
  margin:auto;
  margin-top:30px;
`;

const LectureImg = styled.div`
  width: 232px;
  height: 157px;
  border: 2px solid red;
`;
