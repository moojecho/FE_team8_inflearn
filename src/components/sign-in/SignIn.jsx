import React from "react";
import styled from "styled-components";
import logo from "../../src_assets/logo1.png";
import { GrClose } from "react-icons/gr";
import ModalBackground from "../modal/ModalBackground";

const SignIn = () => {
  return (
    <>
      <ModalBackground />
      <Section>
        <CloseButton>
          <GrClose />
        </CloseButton>
        <Logo src={logo} />
        <form>
          <SignInInputBox>
            <SignInInput type="text" id="email" placeholder="이메일" />
            <SignInInput type="password" id="password" placeholder="비밀번호" />
          </SignInInputBox>
          <SignInButton>로그인</SignInButton>
        </form>
        <SingUpButton>회원가입</SingUpButton>
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
`;

const Logo = styled.img`
  width: 135;
  height: 24px;
`;
const SignInInputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const SignInInput = styled.input`
  width: 312px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  padding: 13px 12px;
  margin-top: 16px;
  letter-spacing: -0.3px;

  &:focus {
    outline: 1px solid#00c471;
  }
  &::placeholder {
    color: #dee2e6;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.3px;
  }
`;

const SignInButton = styled.button`
  width: 312px;
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
  font-size: 12px;
  font-weight: 400;
  color: #616568;
  letter-spacing: -1px;
  margin-top: 8px;
  border-bottom: 1px solid #858a8d;
  cursor: pointer;
`;
