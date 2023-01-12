import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, of, tap } from 'rxjs';
import { Product } from '../products/interfaces/product.interface';
import { CartProduct } from './cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addProduct(product: CartProduct): Observable<CartProduct> {
    let data = localStorage.getItem('nuevo producto');

    let productList: CartProduct[];
    if (data) {
      let parsedData: CartProduct[] = JSON.parse(data);
      let repeatedProdIndex = parsedData.findIndex(
        (parsedProduct: CartProduct) => {
          return parsedProduct.id === product.id;
        }
      );
      if (repeatedProdIndex != -1) {
        if (parsedData[repeatedProdIndex].amount != undefined) {
          parsedData[repeatedProdIndex].amount += 1;
        } else {
          parsedData[repeatedProdIndex].amount = 1;
        }
        productList = parsedData;
      } else {
        productList = [...parsedData, product];
      }
    } else {
      productList = [product];
    }
    localStorage.setItem('nuevo producto', JSON.stringify(productList));

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
        );
      })
    );
  }
}
