import React, { useEffect } from "react";
import axios from "axios";
import { setCookie } from "../../shared/cookie";

const KaKao = () => {
  let code = new URL(window.location.href).searchParams.get("code");
  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/oauth2/kakao?code=${code}`,
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
        setCookie("nickname", response.data.data.nickname, {
          path: "/",
        });
        window.location.assign("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <span style={{ margin: "auto" }}>
      로그인 중입니다. 잠시만 기다려주세요 !
    </span>
  );
};

export default KaKao;
