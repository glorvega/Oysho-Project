import { createReducer, on, Action } from '@ngrx/store';
import * as cartActions from '.././actions/cart.actions';
import { CartInitialState, CartState } from '../states/cart.state';

const _cartReducer = createReducer(
  CartInitialState,

  on(cartActions.loadCartProducts, (state) => ({
    ...state,
    loading: true,
  })),

  on(cartActions.loadCartProductsSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    loaded: true,
    products: [...product],
  })),

  on(cartActions.loadCartProductsError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  })),

  on(cartActions.addProduct, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  })),

  on(cartActions.addProductSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    loaded: true,
    products: [...product],
  })),

  on(cartActions.addProductError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))

  /*       on(cartActions.removeProduct, (state, { id, product }) => ({
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
