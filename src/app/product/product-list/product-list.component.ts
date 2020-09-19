import { Component, EventEmitter,
  Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../state/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productList : IProduct[];
  @Output() addToCart = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit(): void {
  }

  cart(product: IProduct) {
      this.addToCart.emit(product);
  }

}
