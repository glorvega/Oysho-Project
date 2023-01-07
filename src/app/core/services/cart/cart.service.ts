import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { map, mergeMap, Observable, of, tap } from 'rxjs';
import { Product } from '../products/interfaces/product.interface';
import { CartProduct } from './cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addProduct(product: CartProduct): Observable<CartProduct> {
    console.log(product);
    let data = localStorage.getItem('nuevo producto');
    let prod;
    if (data) {
      prod = [...JSON.parse(data), product];
    } else {
      prod = [product];
    }
    localStorage.setItem('nuevo producto', JSON.stringify(prod));
    console.log(product);

    return of(product);
  }

  /*   removeProduct(product: CartProduct): Observable<CartProduct> {
    let data = localStorage.getItem('nuevo producto');
    let prod;
    if (data) {
      prod = [...JSON.parse(data), product];
    } else {
      prod = [product];
    }
    localStorage.setItem('nuevo producto', JSON.stringify(prod));

    return of(product);
  } */

  /*   addProduct(product: CartProduct) {
    this.getProducts()
      .pipe(
        tap((products) => products.push(product)),
        tap((products) =>
          localStorage.setItem('nuevo producto', JSON.stringify(products))
        )
      )
      .subscribe();
  } */

  getProducts(): Observable<CartProduct[]> {
    const data = localStorage.getItem('nuevo producto');
    if (data) {
      return of(JSON.parse(data));
    } else {
      return of([]);
    }
  }

  /*   deleteProduct(index: number): void {
    this.getProducts()
      .pipe(
        tap((products) => products.splice(index, 1)),
        tap((products) =>
          localStorage.setItem('nuevo producto', JSON.stringify(products))
        )
      )
      .subscribe();
  } */
  /* deleteProduct(productId: number): Observable<CartProduct[]> {
    return this.getProducts().pipe(
      map((products) => {
        products = products.filter((product) => product.id !== productId);
        localStorage.setItem('nuevo producto', JSON.stringify(products));
        return products;
      })
    );
  } */

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
