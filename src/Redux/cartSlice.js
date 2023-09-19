import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items:[],
  amount: 0,
  total: 0,
  isLoading:true,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItems: (state, action) => {
        state.items.push(action.payload);
    },

    removeItems: (state, action) => {
      state.items.pop(action.payload);
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
