import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const EMAIL_REGEX =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

const SignUp = () => {
  return (
    <Section>
      <SignUpTitle>회원가입</SignUpTitle>
      <SignUpMessage>성장에 목마를 때, 인프런</SignUpMessage>
      <form>
        <SignUpInputBox>
          <SignUpLabel htmlFor="email">이메일</SignUpLabel>
          <SignUpInput
            type="text"
            id="email"
            placeholder="example@inflab.com"
            fontSize={"14px"}
          />
        </SignUpInputBox>
        <SignUpInputBox>
          <SignUpLabel htmlFor="password">비밀번호</SignUpLabel>
          <SignUpInput
            type="password"
            id="password"
            placeholder="******"
            fontSize={"18px"}
          />
        </SignUpInputBox>
        <SignUpInputBox>
          <SignUpLabel htmlFor="confirmpw">비밀번호 확인</SignUpLabel>
          <SignUpInput
            type="password"
            id="confirmpw"
            placeholder="******"
            fontSize={"18px"}
          />
        </SignUpInputBox>
        <SignUpButton>가입하기</SignUpButton>
      </form>
    </Section>
  );
};

export default SignUp;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUpTitle = styled.h2`
  font-size: 26px;
  font-weight: 500;
`;

const SignUpMessage = styled.h3`
  font-size: 15px;
  font-weight: 350;
  color: #000a12;
`;

const SignUpLabel = styled.label`
  font-size: 13px;
  font-weight: 400;
  color: #3e4042;
`;

const SignUpInputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const SignUpInput = styled.input`
  width: 320px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  padding: 13px 12px;

  &:focus {
    outline: 1px solid#00c471;
  }
  &::placeholder {
    color: #dee2e6;
    font-size: ${(props) => props.fontSize};
  }
`;

const SignUpButton = styled.button`
  width: 320px;
  height: 48px;
  margin-top: 16px;
  background-color: #00c471;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  letter-spacing: -0.3px;
  font-weight: 700;
  cursor: pointer;
`;
