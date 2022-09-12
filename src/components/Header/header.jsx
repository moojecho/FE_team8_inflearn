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
          style={{
            marginLeft: "16px",
            marginTop: "8px",
            cursor: "pointer",
            maxWidth: "100%",
            height: "47px",
            display: "block",
          }}
          src="img/chuseok_logo.png"
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
  max-width: 1200px;
  min-width: 769px;
  width: 100vw;
  height: 64px;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  display: flex;
  height: 35px;
  margin: auto;
  margin-top: 9px;
  margin-right: 33px;
  padding: 6px;
  border-radius: 4px;
`;

const LoginButton = styled.div`
  font-size: 16px;
  width: 59px;
  height: 35px;
  margin-right: 8px;
  padding-left: 7px;
  padding-top: 5px;
  color: #363636;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  cursor: pointer;
`;

const SignUpButton = styled.div`
  width: 75px;
  height: 35px;
  font-size: 15px;
  padding-left: 7px;
  padding-top: 5px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  color: white;
  background-color: #ff7867;
  cursor: pointer;
  &:hover {
    background-color: #ff6954;
  }
`;
