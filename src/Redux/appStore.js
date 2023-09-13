import cartReducer from "./cartSlice"

import { configureStore} from "@reduxjs/toolkit";

export const appStore = configureStore({

    reducer: {
        cart : cartReducer
    },
})

export default appStore;