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
  '[Product] Añadir Producto',
  props<{ product: CartProduct[] }>()
);
export const addProductError = createAction(
  '[Product] Añadir Producto Error',
  props<{ payload: any }>()
);

export const removeProduct = createAction(
  '[Product] Eliminar Producto',
  props<{ id: string; product: CartProduct }>()
);

/* export const clearCart = createAction(
  '[Product] Vaciar Carrito',
  props<{ product: Product[] }>()
); */
