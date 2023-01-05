import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Product } from '../products/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  /*   addProduct(product: Product): void {
    const products = this.getProducts();
    products.push(product);
    localStorage.setItem('nuevo producto', JSON.stringify(products));
  }

  getProducts(): Product[] {
    const data = localStorage.getItem('nuevo producto');
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  } */

  addProduct(product: Product): void {
    this.getProducts()
      .pipe(
        tap((products) => products.push(product)),
        tap((products) =>
          localStorage.setItem('nuevo producto', JSON.stringify(products))
        )
      )
      .subscribe();
  }

  getProducts(): Observable<Product[]> {
    const data = localStorage.getItem('nuevo producto');
    if (data) {
      return of(JSON.parse(data));
    } else {
      return of([]);
    }
  }
}
