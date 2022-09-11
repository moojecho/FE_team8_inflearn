import React from "react";
import styled from "styled-components";

const ModalBackground = ({ handleLoginScreen }) => {
  return <Background onClick={handleLoginScreen}></Background>;
};

export default ModalBackground;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(11, 19, 30, 0.37);
  z-index: 1010;
`;
