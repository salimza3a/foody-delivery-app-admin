import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurantData: [],
  filteredData: [],
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurantData: (state, action) => {
      state.restaurantData = action.payload;
    },
    filterRestaurantData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { setRestaurantData, filterRestaurantData } =
  restaurantSlice.actions;

export default restaurantSlice.reducer;
