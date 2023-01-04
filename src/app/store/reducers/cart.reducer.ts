import { createReducer, on, Action } from '@ngrx/store';
import * as cartActions from '.././actions/cart.actions';
import { filter } from 'rxjs/operators';
import { CartInitialState, CartState } from '../states/cart.state';

const _cartReducer = createReducer(
  CartInitialState,

  on(cartActions.addProduct, (state, { product }) => ({
    ...state,
    product: [{ ...product }],
  }))
  /*     on(cartActions.removeProduct, (state, { id, product }) => ({
    ...state,
    product: ),
  })) */
  /*   on(cartActions.clearCart, (state, {product}) => ({ 
    ...state, 
    product: {...product}})), */
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return _cartReducer(state, action);
}
