import { createAction, props } from '@ngrx/store';
import { IProduct } from './product';

export const loadProduct = createAction('[Product] Load Products');

export const loadProductSuccess = createAction('[Product] Load Products Success',
  props<{ products: IProduct[] }>()
);

export const loadProductFailure = createAction('[Product] Load Products Failure',
  props<{ error: string }>()
);

export const addToCart = createAction('[Product] Add Product To Cart',
  props<{ product: IProduct }>()
);

export const filterProduct = createAction('[Product] Filter Product',
  props<{ minPrice: number, maxPrice: number }>()
);

