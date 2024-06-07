import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType, CategoryType } from 'components/ProductRenderings/Products';

interface ProductState {
  products: ProductType[];
  categories?: CategoryType[];
}
const initialState: ProductState = {
  products: [],
  categories: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
    setCategories: (state, action: PayloadAction<CategoryType[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setProducts, setCategories } = productsSlice.actions;
export default productsSlice.reducer;
