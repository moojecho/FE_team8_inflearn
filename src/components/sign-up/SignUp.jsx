import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

// /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pw, setPw] = useState("");
  const [validPw, setValidPw] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);

  const [pwLetterCheck, setPwLetterCheck] = useState(false);
  const [pwLengthCheck, setPwLengthCheck] = useState(false);

  const [confirmPw, setConfirmPw] = useState("");
  const [validConfirmPw, setValidConfirmPw] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(false);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    checkValidPwHandler(pw);
    setValidConfirmPw(pw === confirmPw);
  }, [pw, confirmPw]);

  useEffect(() => {
    setValidPw(pwLetterCheck || pwLengthCheck);
  }, [pwLetterCheck, pwLengthCheck]);

  const checkValidPwHandler = (pw) => {
    let num = pw.search(/[0-9]/g);
    let eng = pw.search(/[a-z]/gi);
    let spe = pw.search(/[!@#$%^&*()?_~]/g);

    if (pw.length < 8 || pw.length > 25) {
      setPwLengthCheck(false);
    } else {
      setPwLengthCheck(true);
    }

    if (
      (num < 0 && eng < 0) ||
      (eng < 0 && spe < 0) ||
      (spe < 0 && num < 0) ||
      pw.search(/\s/) !== -1
    ) {
      setPwLetterCheck(false);
    } else {
      setPwLetterCheck(true);
    }
  };

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
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailnote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            letterSpacing={"-.3px"}
          />
          {emailFocus && email && !validEmail ? (
            <CheckMessage id="emailnote">
              이메일 형식이 올바르지 않습니다.
            </CheckMessage>
          ) : null}
        </SignUpInputBox>
        <SignUpInputBox>
          <SignUpLabel htmlFor="password">비밀번호</SignUpLabel>
          <SignUpInput
            type="password"
            id="password"
            placeholder="******"
            fontSize={"18px"}
            onChange={(e) => setPw(e.target.value)}
            aria-describedby="pwnote"
            onFocus={() => setPwFocus(true)}
            onBlur={() => setPwFocus(false)}
            letterSpacing={"2px"}
          />
          {pwFocus ? (
            <PwNote>
              <PwMessage
                color={pw ? (pwLetterCheck ? "#00c471" : "#e5503c") : "#abb0b5"}
              >
                영문/특수문자/숫자 2가지 이상 포함
              </PwMessage>
              <PwMessage
                color={pw ? (pwLengthCheck ? "#00c471" : "#e5503c") : "#abb0b5"}
              >
                8자 이상 25자 이하 입력(공백 제외)
              </PwMessage>
            </PwNote>
          ) : null}
        </SignUpInputBox>
        <SignUpInputBox>
          <SignUpLabel htmlFor="confirmpw">비밀번호 확인</SignUpLabel>
          <SignUpInput
            type="password"
            id="confirmpw"
            placeholder="******"
            fontSize={"18px"}
            onChange={(e) => setConfirmPw(e.target.value)}
            aria-describedby="confirmnote"
            onFocus={() => setConfirmFocus(true)}
            onBlur={() => setConfirmFocus(false)}
            letterSpacing={"2px"}
          />
          {confirmFocus && confirmPw && !validConfirmPw ? (
            <CheckMessage>비밀번호가 일치하지 않습니다</CheckMessage>
          ) : null}
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
  letter-spacing: ${(props) => props.letterSpacing};

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

const PwNote = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
`;

const PwMessage = styled.span`
  font-size: 12px;
  color: ${(props) => props.color};
  letter-spacing: -0.3px;
`;

const CheckMessage = styled.p`
  font-size: 12px;
  color: #e5503c;
  letter-spacing: -0.3px;
  margin-top: 4px;
`;
