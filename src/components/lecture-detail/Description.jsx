import React from "react";
import styled from "styled-components";

const Description = ({ description }) => {
  return (
    <Container>
      <Body>{description}</Body>
    </Container>
  );
};

export default Description;

const Container = styled.div`
  margin: 0 auto;
  padding: 28px 20px;
  max-width: 1200px;
`;

const Body = styled.span`
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  color: #343a40;
`;
