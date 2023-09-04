import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addUserInfo } = userSlice.actions;

export default userSlice.reducer;
