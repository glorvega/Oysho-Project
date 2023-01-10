import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, of, tap } from 'rxjs';
import { CartProduct } from './cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addProduct(product: CartProduct): Observable<CartProduct> {
    let data = localStorage.getItem('nuevo producto');
    let prod;
    if (data) {
      prod = [...JSON.parse(data), product];
    } else {
      prod = [product];
    }
    localStorage.setItem('nuevo producto', JSON.stringify(prod));

    return of(product);
  }

  getProducts(): Observable<CartProduct[]> {
    const data = localStorage.getItem('nuevo producto');
    if (data) {
      return of(JSON.parse(data));
    } else {
      return of([]);
    }
  }

  removeProduct(productIndex: number): Observable<void> {
    return this.getProducts().pipe(
      mergeMap((products) => {
        products.splice(productIndex, 1);
        return of(
          localStorage.setItem('nuevo producto', JSON.stringify(products))
        ).pipe(map(() => {}));
      })
    );
  }
}
