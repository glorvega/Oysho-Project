import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, mergeMap } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { addProduct } from '../actions/cart.actions';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addProduct),
      tap((action) => {
        const products = this.cartService.getProducts();
        products.push(action.product);
        localStorage.setItem('nuevo producto', JSON.stringify(products));
      })
      //map(() => addProduct({product}))
    )
  );
}
