import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {
  clearAuthorizationToken,
  getAccessToken,
  getRefreshToken,
  saveAccessToken,
  saveRefreshToken,
} from "@/utils/localstorage";

const BASE_URL = "http://localhost:8080/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

const handleRefreshToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      throw new Error("No refresh token! Need to login again.");
    }
    const instance = axios.create({
      baseURL: BASE_URL,
    });

    const resp = await instance.get("/auth/refresh-token", {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    if (resp.status !== 200) {
      throw new Error("No refresh token! Need to login again.");
    }
    return resp.data;
  } catch (error) {
    return null;
  }
};

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();

    if (!accessToken && !refreshToken) return config;
    if (
      !accessToken ||
      (jwtDecode(accessToken) as any).exp <= Date.now() / 1000
    ) {
      console.log("Access token expired! Reauthorizing with refresh token.");
      const resp = await handleRefreshToken();
      if (resp) {
        console.log("[Auth] Reauthorization success. Retrying last request");
        saveAccessToken(resp.accessToken);
        saveRefreshToken(resp.refreshToken);
      } else {
        clearAuthorizationToken();
      }
    }
    config.headers["Authorization"] = `Bearer ${getAccessToken()}`;
    config.headers["Accept"] = "application/json";
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (originalRequest.url === "/auth/login") return Promise.reject(error);
    if (error.response.status === 400 && !originalRequest._retry) {
      console.log(
        "[Auth] Access token expired! Reauthorizing with refresh token."
      );
      originalRequest._retry = true;
      const result = await handleRefreshToken();
      if (result) {
        console.log("[Auth] Reauthorization success. Retrying last request");
        saveAccessToken(result?.accessToken);
        saveRefreshToken(result?.refreshToken);
        axiosInstance.defaults.headers.common.authorization = `Bearer ${result?.accessToken}`;
        return axiosInstance(originalRequest);
      }
      clearAuthorizationToken();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
