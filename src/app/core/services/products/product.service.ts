import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category, Product } from './interfaces/product.interface';
import { ApiProductService } from './api/api-product.service';
import { ProductUtils } from './utils/product.utils';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apiProductService: ApiProductService) {}

  getCategories(): Observable<Category[]> {
    return this.apiProductService.getCategory().pipe(
      map((apiCategories) => {
        return apiCategories.categories.map((cat) => ({
          id: cat.id,
          name: cat.name,
          nameEn: cat.nameEn,
          description: cat.description,
        }));
      })
    );
  }

  getProductList(id: string): Observable<Product[]> {
    return this.apiProductService.getApiProductList(id).pipe(
      map((apiProductList) => {
        return apiProductList.products
          .filter((product) => {
            return product.name !== '';
          })
          .map((product) => ProductUtils.getModifiedProducts(product));
      })
    );
  }

  getDetails(catId: string, prodId: string): Observable<Product> {
    return this.apiProductService
      .getProductsDetails(catId, prodId)
      .pipe(map((apiProduct) => ProductUtils.getModifiedProducts(apiProduct)));
  }
}
