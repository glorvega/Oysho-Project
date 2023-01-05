import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/core/services/products/interfaces/product.interface';
import {
  addProduct,
  loadCartProducts,
  loadCartProductsSuccess,
} from 'src/app/store/actions/cart.actions';
import { CartState } from 'src/app/store/states/cart.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];

  constructor(
    private cartService: CartService,
    private store: Store<CartState>
  ) {}

  ngOnInit(): void {
    this.store.select('product').subscribe(({ product }) => {
      if (product) {
        this.cartProducts = product;
      } else {
        return;
      }
    });

    this.getCartProducts();
  }

  /*   getCartProducts() {
    this.cartProducts = this.cartService.getProducts();
    console.log(JSON.stringify(this.cartProducts));
  } */

  /* getCartProducts() {
    this.cartService
      .getProducts()
      .subscribe((products) => (this.cartProducts = products));
  } */

  getCartProducts() {
    this.store.dispatch(loadCartProducts());
  }
}
