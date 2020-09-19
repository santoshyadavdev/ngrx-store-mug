import { createReducer, on, State, Store } from "@ngrx/store";
import { IProduct } from "./product";
import { loadProductSuccess, loadProductFailure, addToCart, filterProduct } from './product.action';

export interface ProductState {
  products: IProduct[];
  cart: IProduct[];
  priceFilter: {
    minPrice: number;
    maxPrice: number;
  },
  error: string;
}

const initialState: ProductState = {
  products: [],
  cart: [],
  priceFilter: {
    minPrice: 0,
    maxPrice: 0
  },
  error: ''
}

export const productReducer = createReducer(
  initialState,
  on(loadProductSuccess, (state, { products }) => ({
    ...state,
    products,
    error: ''
  })),
  on(loadProductFailure, (state, { error }) => ({
    ...state,
    error,
    products: []
  })),
  on(addToCart, (state, { product }) => ({
    ...state,
    cart: [...state.cart, product]
  })),
  on(filterProduct, (state, { minPrice, maxPrice }) => ({
    ...state,
    priceFilter: { minPrice, maxPrice }
  }))
);
