import React, { useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { BsExclamationTriangle } from "react-icons/bs";
import ModalBackground from "../modal/ModalBackground";

const CommentForm = ({ onSubmitHandler }) => {
  const [score, setScore] = useState(0);
  const [modal, setModal] = useState(false);
  const [comment, setComment] = useState("");

  const [errTitle, setErrTitle] = useState("");
  const [errMsg, setErrMsg] = useState("");

  let FillWidth = `${150 * (score / 5)}px`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (score === 0 || comment === "") {
      setErrTitle("입력값 확인");
      setErrMsg("빈칸이 존재합니다");
      setModal(true);
      return;
    } else if (comment.trim().length < 5) {
      setErrTitle("수강평을 5자 이상 입력해주세요.");
      setErrMsg(`양질의 피드백은 지식공유자분께 큰 도움이 됩니다.`);
      setModal(true);
      return;
    }
    const review = {
      lectureId: 1,
      content: comment,
      star: score,
    };

    onSubmitHandler(review);
    setScore(0);
    setComment("");
  };

  return (
    <>
      {modal ? (
        <>
          <ModalBackground zIndex={1010} />
          <ModalSection>
            <BsExclamationTriangle
              style={{
                width: "56px",
                height: "50px",
                color: "#f3a32d",
                marginBottom: "20px",
              }}
            />
            <ModalTitle>{errTitle}</ModalTitle>
            <ModalErrorMessage>{errMsg}</ModalErrorMessage>
            <ModalConFirmButton type="button" onClick={() => setModal(false)}>
              확인
            </ModalConFirmButton>
          </ModalSection>
        </>
      ) : null}
      <Form onSubmit={handleSubmit}>
        <StarBox>
          <Star>
            <div>
              <AiFillStar
                style={{
                  color: "rgb(222, 226, 230)",
                  width: "30px",
                  height: "30px",
                }}
                onClick={() => setScore(1)}
              />
              <AiFillStar
                style={{
                  color: "rgb(222, 226, 230)",
                  width: "30px",
                  height: "30px",
                }}
                onClick={() => setScore(2)}
              />
              <AiFillStar
                style={{
                  color: "rgb(222, 226, 230)",
                  width: "30px",
                  height: "30px",
                }}
                onClick={() => setScore(3)}
              />
              <AiFillStar
                style={{
                  color: "rgb(222, 226, 230)",
                  width: "30px",
                  height: "30px",
                }}
                onClick={() => setScore(4)}
              />
              <AiFillStar
                style={{
                  color: "rgb(222, 226, 230)",
                  width: "30px",
                  height: "30px",
                }}
                onClick={() => setScore(5)}
              />
            </div>
            <FillStar width={FillWidth}>
              <AiFillStar
                style={{
                  color: "rgb(255, 200, 7)",
                  width: "30px",
                  height: "30px",
                }}
                onClick={() => setScore(1)}
              />
              <AiFillStar
                style={{
                  color: "rgb(255, 200, 7)",
                  width: "30px",
                  height: "30px",
                }}
                onClick={() => setScore(2)}
              />
              <AiFillStar
                style={{
                  color: "rgb(255, 200, 7)",
                  width: "30px",
                  height: "30px",
                }}
                onClick={() => setScore(3)}
              />
              <AiFillStar
                style={{
                  color: "rgb(255, 200, 7)",
                  width: "30px",
                  height: "30px",
                }}
                onClick={() => setScore(4)}
              />
              <AiFillStar
                style={{
                  color: "rgb(255, 200, 7)",
                  width: "30px",
                  height: "30px",
                }}
                onClick={() => setScore(5)}
              />
            </FillStar>
          </Star>
          <StarComment>별점을 선택해주세요</StarComment>
        </StarBox>
        <InputBox>
          <ContentBox>
            <Input
              placeholder="좋은 수강평을 남겨주시면 지식공유자와 이후 배우는 사람들에게 큰 도움이 됩니다! (5자 이상)"
              minlength="5"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
            <ButtonBox>
              <SubmitButton>등록</SubmitButton>
            </ButtonBox>
          </ContentBox>
        </InputBox>
      </Form>
    </>
  );
};

export default CommentForm;

const Form = styled.form`
  border-radius: 4px;
  border: 1px solid #e9ecef;
  background-color: #f8f9fa;
  margin: 8px auto 48px auto;
`;

const StarBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  padding-top: 26px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: -0.3px;
`;

const Star = styled.div`
  position: relative;
  width: 150px;
  margin-bottom: 8px;
`;

const FillStar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  width: ${(props) => props.width};
`;

const StarComment = styled.div`
  color: #343a40;
  text-align: center;
  font-size: 14px;
`;

const InputBox = styled.div`
  overflow: hidden;
  margin: 0 16px 16px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.textarea`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: -0.3px;
  font-size: 15px;
  padding: 13px 12px;
  width: 100%;
  min-height: 102px;
  border: none;
  background-color: #fff;
  color: #495057;
  border-bottom: 1px solid #dee2e6;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #dee2e6;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #fff;
`;

const SubmitButton = styled.button`
  border: 1px solid #00c471;
  background-color: #00c471;
  font-weight: 700;
  cursor: pointer;
  padding: 0 12px;
  height: 40px;
  font-size: 14px;
  color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  line-height: 1.43;
  letter-spacing: -0.3px;
`;

const ModalSection = styled.section`
  width: 416px;
  height: 290px;
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
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #212529;
  text-align: center;
`;

const ModalErrorMessage = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  color: #343a40;
  text-align: center;
`;

const ModalConFirmButton = styled.button`
  font-family: "Noto Sans KR", sans-serif;
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
