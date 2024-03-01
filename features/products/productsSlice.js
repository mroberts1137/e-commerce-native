import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';
import { appendProductsData } from '../../utils/appendProductsData';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch(baseUrl);

    if (!response.ok)
      return Promise.reject('Unable to fetch, status: ', response.status);

    const data = await response.json();
    return data;
  }
);

const initialState = {
  productsArray: [],
  isLoading: true,
  errMsg: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.errMsg = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errMsg = null;
        state.productsArray = appendProductsData(action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error ? action.error.message : 'Fetch failed';
      });
  }
});

export const selectByCategory = (category) => (state) => {
  return state.products.productsArray.filter(
    (product) => product.category === category
  );
};

export const productsReducer = productsSlice.reducer;
