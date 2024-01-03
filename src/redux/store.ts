import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "@slices/authorization/authorizationSlice";
import jobsReducer from "@slices/jobs/jobsSlice";

export const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
    jobs: jobsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
