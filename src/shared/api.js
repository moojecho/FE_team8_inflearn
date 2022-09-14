import axios from "axios";
import { getCookie, deleteCookie } from "./cookie";

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: { "Content-type": "application/json" },
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");
    if (refreshToken && !accessToken) {
      alert("로그인 시간이 만료되었습니다. 다시 로그인해주세요.");
      deleteCookie("refreshToken");
      deleteCookie("nickname");
      window.location.assign("/");
    } else {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
      config.headers["Refresh-Token"] = refreshToken;
      return config;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
