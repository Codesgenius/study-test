import { createSlice } from "@reduxjs/toolkit";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../utils/localStorage";

const initialState = {
  user: getUserFromLocalStorage(),
  account: "student",
  isSideNavOpen: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.isSideNavOpen = false;
      state.isSmallDotOpen = false;
      removeUserFromLocalStorage();
    },
    toggleSideBar: (state) => {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
  },
});

export const { logOut, toggleSideBar } = userSlice.actions;

export default userSlice.reducer;
