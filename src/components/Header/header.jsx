import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignIn from "../sign-in/SignIn";
import { getCookie, deleteCookie } from "../../shared/cookie";

const Header = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const nickname = getCookie("nickname");

  useEffect(() => {
    if (getCookie("accessToken") || getCookie("refreshToken")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleLoginScreen = () => {
    setLogin(false);
  };

  const handleLogout = () => {
    setIsLogin(false);
    deleteCookie("nickname");
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    window.location.reload();
  };
  return (
    <>
      {login ? <SignIn handleLoginScreen={handleLoginScreen} /> : null}
      <HeaderLayout>
        <img
          style={{
            marginLeft: "25px",
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
          {isLogin ? (
            <>
              <Greetings>{nickname}님</Greetings>
              <SignUpLogoutButton onClick={handleLogout}>
                로그아웃
              </SignUpLogoutButton>
            </>
          ) : (
            <>
              <LoginButton onClick={() => setLogin(true)}>로그인</LoginButton>
              <SignUpLogoutButton onClick={() => navigate("/signup")}>
                회원가입
              </SignUpLogoutButton>
            </>
          )}
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
  box-shadow:0 2px 4px 0 hsl(0deg 0% 95% / 50%);
  z-index: 5;
  position: relative;
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
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  width: 75px;
  height: 35px;
  margin: auto 8px auto;
  padding-top: 5px;
  color: #363636;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
`;

const SignUpLogoutButton = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  width: 75px;
  height: 35px;
  font-size: 15px;
  margin: auto;
  text-align: center;
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

const Greetings = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  margin-right: 10px;
  font-size: 16px;
  margin-top: 3px;
`;
