import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/productslist/productListSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
