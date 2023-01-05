import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';
import { Product } from 'src/app/core/services/products/interfaces/product.interface';

export const loadCartProducts = createAction('[Products] Cargar Productos');

export const loadCartProductsSuccess = createAction(
  '[Products] Cargar Productos Success',
  props<{ product: Product[] }>()
);

export const loadCartProductsError = createAction(
  '[Product] Cargar Productos Error',
  props<{ payload: any }>()
);

export const addProduct = createAction(
  '[Product] Añadir Producto',
  props<{ product: Product }>()
);

export const removeProduct = createAction(
  '[Product] Eliminar Producto',
  props<{ id: string; product: Product }>()
);

/* export const clearCart = createAction(
  '[Product] Vaciar Carrito',
  props<{ product: Product[] }>()
); */
