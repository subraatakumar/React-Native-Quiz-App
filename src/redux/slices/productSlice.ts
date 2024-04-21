import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ProductType} from '../../types/ProductType';
import {fetchProducts} from '../thunks/fetchProducts';

type ProductSliceType = {
  products: ProductType[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductSliceType = {
  products: [],
  loading: false,
  error: null,
};
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductType[]>) => {
          state.loading = false;
          state.products = action.payload;
        },
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred.';
      });
  },
});

export default productSlice.reducer;
