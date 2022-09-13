import React, {useRef , useEffect , useState} from "react";
import  {useDispatch}  from "react-redux";
import instance from "../../shared/api"
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

import Skil from "./skilReco"
import __searchList from "../../redux/modules/lectureSlice"

const SearchList = () => {
  const [lectureData, setLectureData] = useState([]);
  return (
    <div></div>
  );
};

export default SearchList;

const InputLayout = styled.div`
  max-width: 1200px;
  min-width: 769px;
  width: 100vw;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
 