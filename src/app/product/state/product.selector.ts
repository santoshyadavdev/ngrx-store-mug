
import { state } from '@angular/animations';
import { createFeatureSelector, createReducer, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

const getProuctsState = createFeatureSelector<ProductState>('product');

export const getProducts = createSelector(
  getProuctsState,
  state => {
    if (state.priceFilter.minPrice > 0 && state.priceFilter.maxPrice > 0) {
      return state.products.filter(product => product.price >= state.priceFilter.minPrice
        && product.price <= state.priceFilter.maxPrice)
    } else {
      return state.products;
    }
  }
);

export const getCart = createSelector(
  getProuctsState,
  state => state.cart
);

export const getFilters = createSelector(
  getProuctsState,
  state => state.priceFilter
)
