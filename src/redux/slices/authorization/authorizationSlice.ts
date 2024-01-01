import { createSlice } from "@reduxjs/toolkit";

export interface IResumes {
  id?: number;
  fullname?: string;
  email?: string;
  fileUrl?: string;
  status?: boolean;
  job?: IJobs;
}

export interface IJobs {
  id?: number;
  name?: string;
  description?: string;
  skills?: string[];
  location?: string;
  salary?: string;
  level?: string;
  quantity?: string;
  startDate?: Date;
  endDate?: Date;
  company?: ICompanies;
  isActive?: boolean;
}

export interface ICompanies {
  id?: number;
  companyName?: string;
  provinceName?: string;
  districtName?: string;
  introduction?: string;
  logo?: string;
  scales?: string;
}

export interface AuthorizationData {
  id?: number;
  fullname?: string;
  email?: string;
  gender?: "male" | "female";
  phoneNumber?: number;
  avatar?: string;
  role?: string;
  isVerify?: boolean;
  company?: ICompanies;
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
