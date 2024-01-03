import { createSlice } from "@reduxjs/toolkit";
import { IJobs } from "@slices/authorization/authorizationSlice";

type JobsState = {
  currentJobChoose: IJobs | null;
};

const initialState: JobsState = {
  currentJobChoose: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setCurrentJobChoose: (state, action) => {
      state.currentJobChoose = action.payload;
    },
  },
});

export const { setCurrentJobChoose } = jobsSlice.actions;
export default jobsSlice.reducer;
