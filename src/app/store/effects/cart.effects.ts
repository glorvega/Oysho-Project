import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  tap,
  map,
  mergeMap,
  catchError,
  switchMap,
  take,
} from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';
import * as cartActions from '.././actions/cart.actions';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  loadProduct$ = createEffect(() =>
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

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.addProduct),
      tap((data) => console.log('efectito', data)),
      switchMap((action) => {
        return this.cartService.addProduct(action.product).pipe(
          map((product) => cartActions.addProductSuccess({ product })),
          catchError((error) =>
            of(cartActions.addProductError({ payload: error }))
          )
        );
      })
    )
  );

  removeProductByIndex$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.removeProductByIndex),
      switchMap(({ productIndex }) =>
        this.cartService.removeProduct(productIndex).pipe(
          map(() => cartActions.removeProductByIndexSuccess({ productIndex })),
          catchError((error) =>
            of(cartActions.removeProductByIndexError({ error }))
          )
        )
      )
    )
  );

  /*   removeProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.removeProduct),
      tap((data) => console.log('efectito', data)),
      switchMap((action) => {
        return this.cartService.deleteProduct(action.id).pipe(
          map((product) => cartActions.removeProduct({ id: product.id})),
          catchError((error) =>
            of(cartActions.addProductError({ payload: error }))
          )
        );
      })
    )
  ); */
}
