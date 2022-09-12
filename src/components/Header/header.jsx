import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignIn from "../sign-in/SignIn";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getCookie, deleteCookie } from "../../shared/cookie";
import { setUser } from "../../redux/modules/user";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const username = useSelector((state) => state.user.user);

  useEffect(() => {
    if (getCookie("accessToken") || getCookie("refreshToken")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [username]);

  const handleLoginScreen = () => {
    setLogin(false);
  };

  const handleLogout = () => {
    setIsLogin(false);
    dispatch(setUser(""));
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
  };
  return (
    <>
      {login ? <SignIn handleLoginScreen={handleLoginScreen} /> : null}
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
          {isLogin ? (
            <>
              <Greetings>{username}님</Greetings>
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

const SignUpLogoutButton = styled.div`
  width:75px;
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

const Greetings = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  margin-right: 10px;
  font-size: 16px;
`;
