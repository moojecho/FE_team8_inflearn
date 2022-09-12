import React from "react";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  return (
    <InputLayout>
      <InputTitle>성장기회의 평등을 추구합니다.</InputTitle>
      <DivSearch
        suppressContentEditableWarning={true}
        style={{ padding: "12px" }}
      >
        <InputSearch />
        <SearchOutlined
          style={{
            fontSize: "25px",
            opacity: "0.6",
            cursor: "pointer",
          }}
        />
      </DivSearch>
      <UnderSearch>
        <Skils>#MVC</Skils>
        <Skils>#React</Skils>
        <Skils>#Spring Boot</Skils>
        <Skils>#JAVA</Skils>
        <Skils>#Python</Skils>
        <Skils>#JPA</Skils>
        <Skils>#Java Script</Skils>
      </UnderSearch>
    </InputLayout>
  );
};

export default Search;

const InputLayout = styled.div`
  max-width: 1200px;
  min-width: 769px;
  width: 100vw;
  height: 200px;
  display: flex;
  justify-content: center;
  border: none;
  flex-direction: column;
`;

const InputTitle = styled.p`
  margin: auto;
  font-size: 22px;
  margin-bottom: 7px;
  color:#363636;
`;

const DivSearch = styled.div`
  width: 600px;
  height: 55px;
  border: 1px solid rgba(29, 192, 120, 0.24);
  border-radius: 28px;
  background-color: rgba(29, 192, 120, 0.12);
  margin: auto;
  margin-top: 7px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  &:hover {
    border: 1px solid #dedede;
    background-color: #fff;
  }
  &:focus {
    outline: none;
  }
`;

const InputSearch = styled.input`
  width: 540px;
  height: 30px;
  font-size: 25px;
  border: none;
  background-color: rgba(29, 192, 120, 0);
  &:focus {
    outline: none;
  }
`;

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
