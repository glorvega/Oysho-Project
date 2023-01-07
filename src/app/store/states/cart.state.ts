import { CartProduct } from 'src/app/core/services/cart/cart.interface';

export interface CartState {
  id: string | null;
  products: CartProduct[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const CartInitialState: CartState = {
  id: '',
  products: [],
  loaded: false,
  loading: false,
  error: null,
};
