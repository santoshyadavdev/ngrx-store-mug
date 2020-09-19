import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { ProductService } from './state/product.service';
import { IProduct } from './state/product';
import { select, Store } from '@ngrx/store';
import { ProductState } from './state/product.reducer';
import { loadProduct, addToCart, filterProduct } from './state/product.action';
import { getCart, getFilters, getProducts } from './state/product.selector';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  filterForm: FormGroup;
  products$: Observable<IProduct[]>;


  constructor(private productStore: Store<ProductState>,
    private fb: FormBuilder) { }

  cart$: Observable<IProduct[]> = this.productStore.select(getCart);

  ngOnInit(): void {

    this.filterForm = this.fb.group({
      minPrice: new FormControl('', Validators.required),
      maxPrice: new FormControl('', Validators.required)
    });
    this.productStore.dispatch(loadProduct());
    this.products$ = this.productStore.select(getProducts);
    this.productStore.select(getFilters).subscribe(
      filters => this.filterForm.patchValue({
        minPrice: filters.minPrice,
        maxPrice: filters.maxPrice
      })
    )
  }

  addProduct(product: IProduct) {
    this.productStore.dispatch(addToCart({ product }));
  }

  filterProduct() {
    this.productStore.dispatch(filterProduct(
      {
        minPrice: this.filterForm.get('minPrice').value,
        maxPrice: this.filterForm.get('maxPrice').value
      }
    ))
  }

}
