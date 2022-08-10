import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    userName: "salimza3a",
    password: "Salimza3a@",
  },
  isLogin: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setLogin } = loginSlice.actions;

export default loginSlice.reducer;
