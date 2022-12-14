import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';
import { CartProduct } from 'src/app/core/services/cart/cart.interface';

export const loadCartProducts = createAction('[Products] Cargar Productos');

export const loadCartProductsSuccess = createAction(
  '[Products] Cargar Productos Success',
  props<{ product: CartProduct[] }>()
);

export const loadCartProductsError = createAction(
  '[Product] Cargar Productos Error',
  props<{ payload: any }>()
);

export const addProduct = createAction(
  '[Product] Añadir Producto',
  props<{ product: CartProduct }>()
);

export const addProductSuccess = createAction(
  '[Product] Añadir Producto Success',
  props<{ product: CartProduct }>()
);
export const addProductError = createAction(
  '[Product] Añadir Producto Error',
  props<{ payload: any }>()
);

export const removeProductByIndex = createAction(
  '[Product] Remove Product By Index',
  props<{ productIndex: number }>()
);
export const removeProductByIndexSuccess = createAction(
  '[Product] Remove Product By Index Success',
  props<{ productIndex: number }>()
);
export const removeProductByIndexError = createAction(
  '[Product] Remove Product By Index Error',
  props<{ error: any }>()
);

/* export const removeProduct = createAction(
  '[Product] Eliminar Producto',
  props<{ id: number }>()
); */

/* export const clearCart = createAction(
  '[Product] Vaciar Carrito',
  props<{ product: Product[] }>()
); */
