import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/categorySlice";
import loginSlice from "./slice/loginSlice";
import orderSlice from "./slice/orderSlice";
import productSlice from "./slice/productSlice";
import restaurantSlice from "./slice/restaurantSlice";
import offerSlice from "./slice/offerSlice";
export const store = configureStore({
  reducer: {
    login: loginSlice,
    product: productSlice,
    restaurant: restaurantSlice,
    category: categorySlice,
    order: orderSlice,
    offer: offerSlice,
  },
});
