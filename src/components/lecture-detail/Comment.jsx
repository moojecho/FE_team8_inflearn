import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { getCookie } from "../../shared/cookie";
import Star from "./Star";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Line, RiDraftLine } from "react-icons/ri";
import ModalBackground from "../modal/ModalBackground";
import { GrClose } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { BsExclamationTriangle } from "react-icons/bs";

const Comment = ({
  id,
  content,
  nickname,
  star,
  onEditHandler,
  onDeleteHandler,
}) => {
  const [isValid, setIsValid] = useState(false);
  const [editDeleteButton, setEditDeleteButton] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [newScore, setNewScore] = useState(star);
  const [newContent, setNewContent] = useState(content);

  const [errModal, setErrModal] = useState(false);
  const [errTitle, setErrTitle] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const username = getCookie("nickname");
  let FillWidth = `${230 * (newScore / 5)}px`;

  const onSubmitEditComment = (e) => {
    e.preventDefault();
    if (newContent === "") {
      setErrTitle("입력값 확인");
      setErrMsg("빈칸이 존재합니다");
      setErrModal(true);
      return;
    } else if (newContent.trim().length < 5) {
      setErrTitle("수강평을 5자 이상 입력해주세요.");
      setErrMsg(`양질의 피드백은 지식공유자분께 큰 도움이 됩니다.`);
      setErrModal(true);
      return;
    }
    const review = [
      {
        content: newContent,
        star: newScore,
        id,
      },
      star,
    ];

    onEditHandler(review);
    setEditModal(false);
    setEditDeleteButton(false);
  };

  const onSubmitDeleteHandler = () => {
    setDeleteModal(false);
    onDeleteHandler(id);
  };

  useEffect(() => {
    username === nickname ? setIsValid(true) : setIsValid(false);
  }, [username, nickname]);

  useEffect(() => {
    setNewScore(star);
    setNewContent(content);
  }, [content, star]);

  return (
    <>
      {deleteModal ? (
        <>
          <ModalBackground zIndex={1010} />
          <ModalSection zIndex={1011}>
            <BsExclamationTriangle
              style={{
                width: "56px",
                height: "50px",
                color: "#f3a32d",
                marginBottom: "20px",
              }}
            />
            <ModalTitle>수강평 삭제</ModalTitle>
            <ModalErrorMessage>수강평을 삭제하시겠습니까?</ModalErrorMessage>
            <EditButtonBox>
              <EditCancelButton onClick={() => setDeleteModal(false)}>
                취소
              </EditCancelButton>
              <ModalConFirmButton type="button" onClick={onSubmitDeleteHandler}>
                확인
              </ModalConFirmButton>
            </EditButtonBox>
          </ModalSection>
        </>
      ) : null}
      {errModal ? (
        <>
          <ModalBackground zIndex={1012} />
          <ModalSection zIndex={1013}>
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
            <ModalConFirmButton
              type="button"
              onClick={() => setErrModal(false)}
            >
              확인
            </ModalConFirmButton>
          </ModalSection>
        </>
      ) : null}
      {editModal ? (
        <>
          <ModalBackground zIndex={1010} />
          <ModalForm onSubmit={onSubmitEditComment}>
            <CloseButton type="button" onClick={() => setEditModal(false)}>
              <GrClose />
            </CloseButton>
            <ModalTitle>힘이 되는 수강평을 남겨주세요!</ModalTitle>
            <EditStarBox>
              <div>
                <AiFillStar
                  style={{
                    color: "rgb(222, 226, 230)",
                    width: "46px",
                    height: "44px",
                  }}
                  onClick={() => setNewScore(1)}
                />
                <AiFillStar
                  style={{
                    color: "rgb(222, 226, 230)",
                    width: "46px",
                    height: "44px",
                  }}
                  onClick={() => setNewScore(2)}
                />
                <AiFillStar
                  style={{
                    color: "rgb(222, 226, 230)",
                    width: "46px",
                    height: "44px",
                  }}
                  onClick={() => setNewScore(3)}
                />
                <AiFillStar
                  style={{
                    color: "rgb(222, 226, 230)",
                    width: "46px",
                    height: "44px",
                  }}
                  onClick={() => setNewScore(4)}
                />
                <AiFillStar
                  style={{
                    color: "rgb(222, 226, 230)",
                    width: "46px",
                    height: "44px",
                  }}
                  onClick={() => setNewScore(5)}
                />
              </div>
              <FillStar width={FillWidth}>
                <AiFillStar
                  style={{
                    color: "rgb(255, 200, 7)",
                    width: "46px",
                    height: "44px",
                  }}
                  onClick={() => setNewScore(1)}
                />
                <AiFillStar
                  style={{
                    color: "rgb(255, 200, 7)",
                    width: "46px",
                    height: "44px",
                  }}
                  onClick={() => setNewScore(2)}
                />
                <AiFillStar
                  style={{
                    color: "rgb(255, 200, 7)",
                    width: "46px",
                    height: "44px",
                  }}
                  onClick={() => setNewScore(3)}
                />
                <AiFillStar
                  style={{
                    color: "rgb(255, 200, 7)",
                    width: "46px",
                    height: "44px",
                  }}
                  onClick={() => setNewScore(4)}
                />
                <AiFillStar
                  style={{
                    color: "rgb(255, 200, 7)",
                    width: "46px",
                    height: "44px",
                  }}
                  onClick={() => setNewScore(5)}
                />
              </FillStar>
            </EditStarBox>
            <EditContent
              defaultValue={content}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="좋은 수강평을 남겨주시면 지식공유자와 이후 배우는 사람들에게 큰 도움이 됩니다! (5자 이상)"
            />
            <EditButtonBox>
              <EditCancelButton onClick={() => setEditModal(false)}>
                취소
              </EditCancelButton>
              <EditSubmitButton>저장하기</EditSubmitButton>
            </EditButtonBox>
          </ModalForm>
        </>
      ) : null}
      <Review>
        <ReviewHeader>
          <ProfileImage
            src="https://cdn.inflearn.com/public/main/profile/default_profile.png"
            alt="profile"
          />
          <UserInfo>
            <StarBox>
              <Star width={"14px"} height={"14px"} boxWidth={70} score={star} />
              <Score>{star}</Score>
            </StarBox>
            <Name>{nickname}</Name>
          </UserInfo>
          {isValid ? (
            <div style={{ marginLeft: "auto", position: "relative" }}>
              <BsThreeDotsVertical
                style={{
                  width: "16px",
                  height: "16px",
                  color: "#000a12",
                  cursor: "pointer",
                }}
                onClick={() => setEditDeleteButton(!editDeleteButton)}
              />
              {editDeleteButton ? (
                <EditBox>
                  <EditButton onClick={() => setEditModal(true)}>
                    <RiDraftLine
                      style={{
                        marginRight: "2px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    수정
                  </EditButton>
                  <EditButton
                    style={{ borderTop: "1px solid #dee2e6" }}
                    onClick={() => setDeleteModal(true)}
                  >
                    <RiDeleteBin6Line
                      style={{
                        marginRight: "2px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    삭제
                  </EditButton>
                </EditBox>
              ) : null}
            </div>
          ) : null}
        </ReviewHeader>
        <ReviewBody>{content}</ReviewBody>
        <ReviewDate>2022-09-12</ReviewDate>
      </Review>
    </>
  );
};

export default Comment;

const Review = styled.div`
  border-bottom: 1px solid #f1f3f5;
  padding: 32px 0;
`;

const ReviewHeader = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  margin-right: 8px;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  border: 1px solid #e9ecef;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StarBox = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 4px;
`;

const Score = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #343a40;
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #868e96;
  font-family: "Noto Sans KR", sans-serif;
`;

const ReviewBody = styled.div`
  margin-bottom: 12px;
  color: #495057;
  font-size: 15px;
  white-space: pre-line;
  font-family: "Noto Sans KR", sans-serif;
  line-height: 1.6;
  letter-spacing: -0.3px;
`;

const ReviewDate = styled.span`
  line-height: 1.38px;
  letter-spacing: -0.3px;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  color: #adb5bd;
  font-weight: 500;
  font-family: "Noto Sans KR", sans-serif;
`;

const EditBox = styled.div`
  position: absolute;
  top: calc(100% + 20px);
  right: 0;
  display: inline-flex;
  flex-direction: column;
  width: 82px;
  border: 1px solid #dee2e6;
  box-shadow: 0 3px 8px 0 rgb(222 226 230 / 5%);
  background-color: #fff;
`;

const EditButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  padding: 10px 16px;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
`;

const ModalForm = styled.form`
  width: 512px;
  height: 432px;
  padding: 20px 20px 32px;
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

const ModalTitle = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 6px;
  color: #212529;
  text-align: center;
`;

const EditSubmitButton = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  width: 84px;
  height: 40px;
  background-color: #00c471;
  border: 0;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  border-radius: 3px;
  cursor: pointer;
  letter-spacing: -0.3px;
  margin: 20px 0 0 12px;
  &:hover {
    background-color: rgb(0, 157, 90);
    color: rgb(232, 230, 227);
  }
`;

const EditCancelButton = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  width: 58px;
  height: 40px;
  background-color: #fff;
  border: 0;
  font-size: 15px;
  font-weight: 300;
  border-radius: 3px;
  cursor: pointer;
  letter-spacing: -0.3px;
  margin: 20px 0 0 12px;
`;

const EditButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.span`
  width: 100%;
  text-align: end;
  cursor: pointer;
`;

const EditStarBox = styled.div`
  position: relative;
  width: 230px;
  align-items: center;
  margin: 20px auto 0 auto;
`;

const FillStar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  width: ${(props) => props.width};
`;

const EditContent = styled.textarea`
  font-family: "Noto Sans KR", sans-serif;
  width: 440px;
  height: 140px;
  margin: 5px auto;
  max-height: 140px;
  resize: none;
  background-color: #f8f9fa;
  border-radius: 2px;
  font-size: 16px;
  padding: 16px;
  color: #212529;
  border: 1px solid #dee2e6;
  &:focus {
    outline: none;
    background-color: #fff;
  }
  &::placeholder {
    color: #dee2e6;
  }
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
  z-index: ${(props) => props.zIndex};
  background-color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  padding: 38px 64px;
`;
