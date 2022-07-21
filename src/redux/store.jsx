import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./studentSlice";
import userSlice from "./userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    student: studentSlice,
  },
});
