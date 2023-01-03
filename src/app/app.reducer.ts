import { ActionReducerMap } from '@ngrx/store';
import { cartReducer, loadingReducer } from './store/reducers';
import { CartState } from './store/states/cart.state';
import { LoadingState } from './store/states/loading.state';

export interface AppState {
  cart: CartState;
  loading: LoadingState;
}

export const appReducers: ActionReducerMap<AppState> = {
  cart: cartReducer,
  loading: loadingReducer,
};
