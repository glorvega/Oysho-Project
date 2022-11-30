import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiCategory } from '../interfaces/api-product.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/pages/product/interface/product.interface';

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
}
