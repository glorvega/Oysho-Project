import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, map, mergeMap, catchError } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';
import * as cartActions from '.././actions/cart.actions';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.loadCartProducts),
      tap((data) => console.log('efectito', data)),
      mergeMap(() =>
        this.cartService.getProducts().pipe(
          tap((prod) => console.log('productos', prod)),
          map((product) =>
            cartActions.loadCartProductsSuccess({ product: product })
          ),
          catchError((err) =>
            of(cartActions.loadCartProductsError({ payload: err }))
          )
        )
      )
    )
  );
}
