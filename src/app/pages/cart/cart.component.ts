import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
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
  error: any;
  loading!: boolean;
  cart: boolean = true;
  product!: Product;

  constructor(
    private store: Store<AppState>,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.store.select('cart').subscribe((state: CartState) => {
      console.log(state.product);
      console.log(state.error);
      console.log(state.loading);
      if (state.product) {
        this.cartProducts = state.product;
        this.error = state.error;
        this.loading = state.loading;
      } else {
        return;
      }
    });

    this.getCartProducts();
  }

  getCartProducts() {
    this.store.dispatch(loadCartProducts());
  }

  deleteProduct(index: number) {
    this.cartService.deleteProduct(index);
  }
}
