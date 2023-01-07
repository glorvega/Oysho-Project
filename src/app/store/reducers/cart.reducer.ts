import { createReducer, on, Action } from '@ngrx/store';
import { CartProduct } from 'src/app/core/services/cart/cart.interface';
import * as cartActions from '.././actions/cart.actions';
import { CartInitialState, CartState } from '../states/cart.state';

const _cartReducer = createReducer(
  CartInitialState,

  /* on(cartActions.loadCartProducts, (state) => ({
    ...state,
    loading: true,
  })), */

  on(cartActions.loadCartProductsSuccess, (state, { product }) => {
    // Añadir sólo aquellos productos que no existen en el estado actual
    /* const data = localStorage.getItem('nuevo producto');
    const productsLocalStorage =data ? JSON.parse(data) : [] */
    let newProducts = [];
    if (state.products.length === 0) {
      newProducts = product;
    } else {
      newProducts = product.filter(
        (product: CartProduct) =>
          !state.products.some((p) => p.id === product.id)
      );
    }
    return {
      ...state,
      loading: false,
      loaded: true,
      products: [...state.products, ...newProducts],
    };
  }),

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

  /* on(cartActions.addProduct, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  })), */

  on(cartActions.addProductSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    loaded: true,
    products: [...state.products, product],
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
  })),
  on(cartActions.removeProductByIndexSuccess, (state, { productIndex }) => ({
    ...state,
    products: state.products.filter((product, index) => index !== productIndex),
  }))

  /* on(cartActions.removeProduct, (state, { id }) => {
    console.log('entra 1');
    const products = [...state.products];
    products.splice(
      products.findIndex((p) => p.id === id),
      1
    );

    return {
      ...state,
      products: products,
    };
  }) */

  /* on(cartActions.removeProduct, (state, { id, product }) => ({
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
