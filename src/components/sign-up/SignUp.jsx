import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalBackground from "../modal/ModalBackground";
import { BsExclamationTriangle } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pw, setPw] = useState("");
  const [pwLetterCheck, setPwLetterCheck] = useState(false);
  const [pwLengthCheck, setPwLengthCheck] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);

  const [confirmPw, setConfirmPw] = useState("");
  const [validConfirmPw, setValidConfirmPw] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [modal, setModal] = useState(false);
  const [pwToggle, setPwToggle] = useState(false);
  const [confirmToggle, setConfirmToggle] = useState(false);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    checkValidPwHandler(pw);
    setValidConfirmPw(pw === confirmPw);
  }, [pw, confirmPw]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pw, confirmPw]);

  // 비밀번호 유효성 검사
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

  // 에러메시지
  const handleErrorMessage = () => {
    if (!validEmail) {
      setModal(true);
      setErrMsg("이메일 형식이 올바르지 않습니다.");
      return;
    }
    if (!pwLetterCheck) {
      setModal(true);
      setErrMsg(
        `비밀번호 에러 : 영문 대소문자/숫자/특수 문자\n2가지 이상 포함되어야 합니다.`
      );
      return;
    }
    if (!pwLengthCheck) {
      setModal(true);
      setErrMsg("비밀번호 에러: 최소 8자 이상 25자 이하로 입력해주세요.");
      return;
    }
    if (!validConfirmPw) {
      setModal(true);
      setErrMsg("비밀번호가 일치하지 않습니다.");
      return;
    }
  };

  // 회원가입 제출
  const onSubmitHandler = (e) => {
    e.preventDefault();
    handleErrorMessage();

    axios
      .post(`${process.env.REACT_APP_URL}/signup`, {
        email,
        password: pw,
      })
      .then((response) => {
        if (response.data.success) {
          alert(response.data.data);
        } else {
          setModal(true);
          setErrMsg("이미 가입된 이메일 주소입니다.");
        }
      })
      .catch((error) => alert(error.response.data.error.message));
  };

  return (
    <>
      {modal ? (
        <>
          <ModalBackground />
          <ModalSection>
            <BsExclamationTriangle
              style={{
                width: "56px",
                height: "50px",
                color: "#f3a32d",
                marginBottom: "20px",
              }}
            />
            <ModalTitle>회원가입에 실패했습니다.</ModalTitle>
            <ModalErrorMessage>{errMsg}</ModalErrorMessage>
            <ModalCloseButton type="button" onClick={() => setModal(false)}>
              확인
            </ModalCloseButton>
          </ModalSection>
        </>
      ) : null}
      <Section>
        <SignUpTitle>회원가입</SignUpTitle>
        <SignUpMessage>성장에 목마를 때, 인프런</SignUpMessage>
        <form onSubmit={onSubmitHandler}>
          <SignUpLabel htmlFor="email">이메일</SignUpLabel>
          <SignUpInputBox>
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
          </SignUpInputBox>
          {emailFocus && email && !validEmail ? (
            <CheckMessage id="emailnote">
              이메일 형식이 올바르지 않습니다.
            </CheckMessage>
          ) : null}
          <SignUpLabel htmlFor="password">비밀번호</SignUpLabel>
          <SignUpInputBox>
            <SignUpInput
              type={pwToggle ? "text" : "password"}
              id="password"
              placeholder="******"
              fontSize={"18px"}
              onChange={(e) => setPw(e.target.value)}
              aria-describedby="pwnote"
              onFocus={() => setPwFocus(true)}
              onBlur={() => setPwFocus(false)}
              letterSpacing={pwToggle ? "-.3px" : "2px"}
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
          </SignUpInputBox>
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
          <SignUpLabel htmlFor="confirmpw">비밀번호 확인</SignUpLabel>
          <SignUpInputBox>
            <SignUpInput
              type={confirmToggle ? "text" : "password"}
              id="confirmpw"
              placeholder="******"
              fontSize={"18px"}
              onChange={(e) => setConfirmPw(e.target.value)}
              aria-describedby="confirmnote"
              onFocus={() => setConfirmFocus(true)}
              onBlur={() => setConfirmFocus(false)}
              letterSpacing={confirmToggle ? "-.3px" : "2px"}
            />
            <Toggle onClick={() => setConfirmToggle(!confirmToggle)}>
              {confirmToggle ? (
                <AiOutlineEyeInvisible
                  style={{ width: "20px", height: "20px" }}
                />
              ) : (
                <AiOutlineEye style={{ width: "20px", height: "20px" }} />
              )}
            </Toggle>
          </SignUpInputBox>
          {confirmFocus && confirmPw && !validConfirmPw ? (
            <CheckMessage>비밀번호가 일치하지 않습니다</CheckMessage>
          ) : null}
          <SignUpButton>가입하기</SignUpButton>
        </form>
      </Section>
    </>
  );
};

export default SignUp;

const ModalSection = styled.section`
  width: 416px;
  height: 307px;
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
  padding: 38px 64px;
`;

const ModalTitle = styled.span`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 6px;
  color: #212529;
  text-align: center;
`;

const ModalErrorMessage = styled.span`
  font-size: 16px;
  color: #343a40;
  text-align: center;
  word-break: break-word;
`;

const ModalCloseButton = styled.button`
  width: 58px;
  height: 40px;
  background-color: #00c471;
  border: 0;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  border-radius: 3px;
  cursor: pointer;
  letter-spacing: -0.3px;
  margin-top: 20px;
  &:hover {
    background-color: rgb(0, 157, 90);
    color: rgb(232, 230, 227);
  }
`;

const Section = styled.section`
  width: 320px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const SignUpTitle = styled.h2`
  font-size: 26px;
  font-weight: 500;
`;

const SignUpMessage = styled.h3`
  font-size: 15px;
  font-weight: 350;
  color: #000a12;
  margin-bottom: 16px;
`;

const SignUpLabel = styled.label`
  display: inline-block;
  margin-top: 16px;
  font-size: 13px;
  font-weight: 400;
  color: #3e4042;
`;

const SignUpInputBox = styled.div`
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
  &:focus-within {
    border: 1px solid#00c471;
  }
`;

const SignUpInput = styled.input`
  width: 100%;
  height: 100%;
  letter-spacing: ${(props) => props.letterSpacing};
  border: 0;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #dee2e6;
    font-size: ${(props) => props.fontSize};
  }
`;

const SignUpButton = styled.button`
  width: 320px;
  height: 48px;
  margin-top: 32px;
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

const Toggle = styled.span`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
