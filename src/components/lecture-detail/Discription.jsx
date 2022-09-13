import React from "react";
import styled from "styled-components";

const Discription = () => {
  return (
    <Container>
      <Body>초급자를 위해 준비한 [웹 개발, 프론트엔드] 강의입니다.</Body>
    </Container>
  );
};

export default Discription;

const Container = styled.div`
  margin: 0 auto;
  padding: 28px 20px;
  max-width: 1200px;
`;

const Body = styled.span`
  font-size: 22px;
  font-family: "Noto Sans KR", sans-serif;
  color: #343a40;
`;
