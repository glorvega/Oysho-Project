import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';
import { Product } from 'src/app/core/services/products/interfaces/product.interface';

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
