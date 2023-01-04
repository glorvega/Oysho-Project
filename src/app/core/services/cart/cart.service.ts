import { Injectable } from '@angular/core';
import { Product } from '../products/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addProduct(product: Product): void {
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
  }
}
