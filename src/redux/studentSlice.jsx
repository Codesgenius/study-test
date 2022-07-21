import { createSlice } from "@reduxjs/toolkit";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../utils/localStorage";

const initialState = {
  isSideNavOpen: false,
  user: getUserFromLocalStorage(),
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    logOut: (state) => {
      state.student = null;
      state.isSideNavOpen = false;
      state.isSmallDotOpen = false;
      removeUserFromLocalStorage();
    },
    toggleSideBar: (state) => {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
  },
});

export const { logOut, toggleSideBar } = studentSlice.actions;

export default studentSlice.reducer;
