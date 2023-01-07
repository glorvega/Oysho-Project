import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Product } from '../products/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addProduct(product: Product) /* : Observable<CartProduct> */ {
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

  deleteProduct(index: number): void {
    this.getProducts()
      .pipe(
        tap((products) => products.splice(index, 1)),
        tap((products) =>
          localStorage.setItem('nuevo producto', JSON.stringify(products))
        )
      )
      .subscribe();
  }
}
