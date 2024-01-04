import cartReducer from "./CartSlice";

import { configureStore } from "@reduxjs/toolkit";

export const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
