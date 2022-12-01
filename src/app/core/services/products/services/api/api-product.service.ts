import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  ApiCategory,
  ApiProduct,
  ProductList,
} from '../../interfaces/api-product.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiProductService {
  private base: string;

  constructor(private http: HttpClient) {
    this.base = environment.base;
  }

  getCategory(): Observable<ApiCategory> {
    return this.http.get<ApiCategory>(`${this.base}/category`);
  }

  getProductsByCategory(id: string): Observable<ProductList> {
    return this.http.get<ProductList>(`${this.base}/category/${id}/product`);
  } //en array

  getProductsDetails(catId: string, prodId: string): Observable<ApiProduct> {
    return this.http.get<ApiProduct>(
      `${this.base}/category/${catId}/product/${prodId}/detail`
    );
  } //en objeto
}
