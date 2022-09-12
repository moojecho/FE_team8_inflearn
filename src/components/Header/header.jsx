import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignIn from "../sign-in/SignIn";

const Header = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const handleLoginScreen = () => {
    setToggle(false);
  };
  return (
    <>
      {toggle ? <SignIn handleLoginScreen={handleLoginScreen} /> : null}
      <HeaderLayout>
        <img
          style={{ marginLeft: "55px", cursor: "pointer" }}
          src="img/infLogo.png"
          alt="logo"
          onClick={() => navigate("/")}
        />
        <Button>
          <LoginButton onClick={() => setToggle(true)}>로그인</LoginButton>
          <SignUpButton onClick={() => navigate("/signup")}>
            회원가입
          </SignUpButton>
        </Button>
      </HeaderLayout>
    </>
  );
};

export default Header;

const HeaderLayout = styled.div`
max-width:1200px;
min-width:769px;
width:100vw;
height:64px;
display: flex;
`;

const Button = styled.div`
  display: flex;
  height: 35px;
  margin-right: 10px;
  padding: 6px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
`;

const SignUpButton = styled.div`
  height: 35px;
  padding: 6px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: white;
  background-color: #ff7867;
  cursor: pointer;

  &:hover {
    background-color: #ff6954;
  }
`;
