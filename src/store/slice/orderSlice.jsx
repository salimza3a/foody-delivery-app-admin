import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ordersData: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrdersData: (state, action) => {
      state.ordersData = action.payload;
    },
  },
});

export const { setOrdersData } = orderSlice.actions;

export default orderSlice.reducer;
