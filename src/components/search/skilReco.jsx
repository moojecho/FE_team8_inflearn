import React from "react";
import styled from "styled-components";

const Skil = () => {
  return (
    <UnderSearch>
        <Skils>#MVC</Skils>
        <Skils>#React</Skils>
        <Skils>#Spring Boot</Skils>
        <Skils>#JAVA</Skils>
        <Skils>#Python</Skils>
        <Skils>#JPA</Skils>
        <Skils>#Java Script</Skils>
    </UnderSearch>
  );
};

export default Skil;

const UnderSearch = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: -15px;
`;

const Skils = styled.div`
  background-color: #f1f3f5;
  display: flex;
  align-items: center;
  line-height: 1.5;
  letter-spacing: -.3px;
  font-size: 12px;
  margin: 4px;
  padding: 0 12px;
  height: 28px;
  color: #3e4042;
  border-radius: 20px;
`;
