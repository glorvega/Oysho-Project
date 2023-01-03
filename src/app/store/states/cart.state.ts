import { Product } from 'src/app/core/services/products/interfaces/product.interface';

export interface CartState {
  id: string | null;
  product: Product[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const CartInitialState: CartState = {
  id: '',
  product: [],
  loaded: false,
  loading: false,
  error: null,
};
