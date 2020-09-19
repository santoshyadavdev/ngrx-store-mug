import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from './product.service';
import { loadProduct, loadProductSuccess, loadProductFailure } from './product.action';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()
export class ProductEffect {

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) { }


  loadProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProduct),
      exhaustMap(() =>
        this.productService.getProducts().pipe(
          map(data => loadProductSuccess({ products: data })),
          catchError(error => of(loadProductFailure({ error }))))
      ),
    );
  });

}

