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
          style={{ marginLeft: "55px", cursor: "pointer" }}
          src="img/infLogo.png"
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

const LoginButton = styled.div`
height:35px;
margin-right:10px;
padding:6px;
border: 1px solid #dbdbdb;
border-radius:4px;
cursor: pointer;
`;

const SignUpLogoutButton = styled.div`
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

const Greetings = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  margin-right: 10px;
  font-size: 16px;
`;
