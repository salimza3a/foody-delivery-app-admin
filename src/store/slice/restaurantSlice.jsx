import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurantData: [],
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurantData: (state, action) => {
      state.restaurantData = action.payload;
    },
  },
});

export const { setRestaurantData } = restaurantSlice.actions;

export default restaurantSlice.reducer;
