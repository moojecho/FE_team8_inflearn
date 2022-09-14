import axios from "axios";
import { getCookie, setCookie } from "./cookie";

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: { "Content-type": "application/json" },
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");

    config.headers["Authorization"] = `Bearer ${accessToken}`;
    config.headers["Refresh-Token"] = refreshToken;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      if (error.response.data.message === "expired") {
        const originalRequest = config;
        const refreshToken = await getCookie("refreshToken");
        const { data } = await axios.post(
          `${process.env.REACT_APP_URL}/refreshToken`,
          {},
          { headers: { "Refresh-Token": refreshToken } }
        );
        await setCookie("accessToken", data.accessToken, {
          path: "/",
          expires: new Date(Date.now() + 30 * 60 * 1000),
          httpOnly: true,
          sameSite: "strict",
        });
        await setCookie("refreshToken", data.refreshToken, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
        });
        originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
