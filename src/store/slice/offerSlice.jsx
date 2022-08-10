import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offerData: [],
};

export const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    setOfferData: (state, action) => {
      state.offerData = action.payload;
    },
  },
});

export const { setOfferData } = offerSlice.actions;

export default offerSlice.reducer;
