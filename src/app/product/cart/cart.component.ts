import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../state/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart: IProduct[];

  constructor() { }

  ngOnInit(): void {
  }

}
