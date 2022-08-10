import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDatas: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductDatas: (state, action) => {
      state.productDatas = action.payload;
    },
  },
});

export const { setProductDatas } = productSlice.actions;

export default productSlice.reducer;
