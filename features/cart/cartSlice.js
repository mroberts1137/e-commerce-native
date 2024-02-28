import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartArray: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartArray.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartArray = state.cartArray.filter(
        (item) => item.id !== action.payload.id
      );
    }
  }
});

export const cartReducer = cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;

export const selectAll = (state) => {
  return state.cart.cartArray;
};

export const getCartSize = (state) => {
  return state.cart.cartArray.length;
};
