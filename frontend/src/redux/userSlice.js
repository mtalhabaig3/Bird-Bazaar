import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      state.user += action.payload;
    },
  },
});

export const { addUserInfo } = counterSlice.actions;

export default counterSlice.reducer;
