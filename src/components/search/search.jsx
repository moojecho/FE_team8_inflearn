import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import instance from "../../shared/api";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

import Skil from "./skilReco";
import SearchList from "./searchList";
import {__searchList,__getLectureList} from "../../redux/modules/lectureSlice";

const Search = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = (inputRef) => {
      dispatch(__searchList(inputRef));
      navigate('/search')
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      getData(inputRef);
    }
  };

  return (
    <InputLayout>
      <InputTitle>성장기회의 평등을 추구합니다.</InputTitle>
      <DivSearch
        suppressContentEditableWarning={true}
        style={{ padding: "12px" }}
      >
        <InputSearch
          placeholder={"배우고 싶은 지식을 입력해보세요."}
          onKeyPress={onKeyPress}
          ref={inputRef}
        />
        <SearchOutlined
          style={{
            fontSize: "25px",
            opacity: "0.6",
            cursor: "pointer",
          }}
          onClick={() => getData(inputRef)}
        />
      </DivSearch>
      <Skil />
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
  color: #363636;
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
  font-size: 16px;
  border: none;
  background-color: rgba(29, 192, 120, 0);
  &:focus {
    outline: none;
  }
`;
