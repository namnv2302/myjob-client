import { createSlice } from "@reduxjs/toolkit";

export interface AuthorizationData {
  fullname?: string;
  email?: string;
  gender?: "male" | "female";
  phoneNumber?: number;
  company?: any;
}

type AuthorizationState = null | AuthorizationData;

const initialState = null as AuthorizationState;

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    logout: () => null,
    login: (state, action) => {
      return action.payload;
    },
  },
});

export const { login, logout } = authorizationSlice.actions;
export default authorizationSlice.reducer;
