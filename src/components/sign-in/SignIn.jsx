import React, { useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import ModalBackground from "../modal/ModalBackground";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { setCookie } from "../../shared/cookie";
import { useNavigate } from "react-router-dom";

const SignIn = ({ handleLoginScreen }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwToggle, setPwToggle] = useState(false);

  const moveToSignUpPage = () => {
    handleLoginScreen();
    navigate("/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || pw === "") {
      alert("이메일 또는 비밀번호를 확인해주세요.");
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/api/member/login`,
        {
          email,
          password: pw,
        },
        {
          withCredentials: true,
        }
      );
      if (!response.data.success) {
        alert(response.data.error.message);
      } else {
        const accessToken = response.headers["authorization"].split(" ")[1];
        const refreshToken = response.headers["refresh-token"];
        setCookie("accessToken", accessToken, {
          path: "/",
          expires: new Date(Date.now() + 60 * 60 * 1000),
        });
        setCookie("refreshToken", refreshToken, {
          path: "/",
        });
        setCookie("nickname", response.data.data.nickname);
        window.location.reload();
        handleLoginScreen();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <ModalBackground handleLoginScreen={handleLoginScreen} zIndex={1010} />
      <Section>
        <CloseButton type="button" onClick={handleLoginScreen}>
          <GrClose />
        </CloseButton>
        <Logo src="/img/logo1.png" />
        <form onSubmit={handleSubmit}>
          <SignInInputBox>
            <SignInInput
              type="text"
              id="email"
              placeholder="이메일"
              autoComplete="off"
              letterSpacing={"-.3px"}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </SignInInputBox>
          <SignInInputBox>
            <SignInInput
              type={pwToggle ? "text" : "password"}
              id="password"
              placeholder="비밀번호"
              letterSpacing={pwToggle ? "-.3px" : "2px"}
              onChange={(e) => setPw(e.target.value)}
              value={pw}
            />
            <Toggle onClick={() => setPwToggle(!pwToggle)}>
              {pwToggle ? (
                <AiOutlineEyeInvisible
                  style={{ width: "20px", height: "20px" }}
                />
              ) : (
                <AiOutlineEye style={{ width: "20px", height: "20px" }} />
              )}
            </Toggle>
          </SignInInputBox>
          <SignInButton>로그인</SignInButton>
        </form>
        <SingUpButton onClick={moveToSignUpPage}>회원가입</SingUpButton>
      </Section>
    </>
  );
};

export default SignIn;

const Section = styled.section`
  width: 360px;
  height: 330px;
  padding: 24px;
  margin: auto;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1011;
  background-color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;

const CloseButton = styled.span`
  width: 312px;
  text-align: end;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
`;

const Logo = styled.img`
  width: 135;
  height: 24px;
  margin-bottom: 16px;
`;
const SignInInputBox = styled.div`
  width: 320px;
  height: 48px;
  padding: 13px 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
  margin-bottom: 12px;
  &:focus-within {
    border: 1px solid#00c471;
  }
`;

const SignInInput = styled.input`
  font-family: "Noto Sans KR", sans-serif;
  width: 100%;
  height: 100%;
  border: 0;
  letter-spacing: ${(props) => props.letterSpacing};

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #dee2e6;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.3px;
  }
`;

const SignInButton = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  width: 320px;
  height: 48px;
  margin-top: 16px;
  background-color: #00c471;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  letter-spacing: -1px;
  font-weight: 700;
  line-height: 1.43;
  cursor: pointer;
`;

const SingUpButton = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #616568;
  letter-spacing: -1px;
  margin-top: 8px;
  border-bottom: 1px solid #858a8d;
  cursor: pointer;
`;

const Toggle = styled.span`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
