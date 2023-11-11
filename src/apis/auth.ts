import axiosInstance from "@/utils/axios";

export enum AuthPath {
  LOGIN = "/auth/login",
  ME = "/auth/me",
  SIGN_UP = "/auth/sign-up",
}

export const login = async (email: string, password: string) => {
  return await axiosInstance.post(AuthPath.LOGIN, {
    username: email,
    password,
  });
};

export const whoAmI = async () => {
  return await axiosInstance.get(AuthPath.ME);
};

export const signUp = async (
  fullname: string,
  email: string,
  password: string
) => {
  return await axiosInstance.post(AuthPath.SIGN_UP, {
    fullname,
    email,
    password,
  });
};
