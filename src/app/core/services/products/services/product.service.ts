import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiProduct, Image } from '../interfaces/api-product.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Category,
  ImageKind,
  ImageSize,
  ImageUrlOptions,
  Product,
} from '../interfaces/product.interface';
import { ApiProductService } from './api/api-product.service';

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
          .map((product) => ({
            id: product.id,
            name: product.name,
            nameEn: product.nameEn,
            image: this.getImagesPerProduct(product),
            longDescription:
              product.bundleProductSummaries[0]?.detail?.longDescription,
            prices: this.getPrices(product),
          }));
      })
    );
  }

  getDetails(catId: string, prodId: string): Observable<Product> {
    return this.apiProductService.getProductsDetails(catId, prodId).pipe(
      map((apiProduct) => ({
        id: apiProduct.id,
        name: apiProduct.name,
        nameEn: apiProduct.nameEn,
        image: this.getImagesPerProduct(apiProduct),
        longDescription:
          apiProduct.bundleProductSummaries[0]?.detail?.longDescription,
        prices: this.getPrices(apiProduct),
      }))
    );
  }

  getImagesPerProduct(product: ApiProduct) {
    const imagesArray: string[] = [];
    product?.bundleProductSummaries[0]?.detail?.colors?.forEach((color) => {
      imagesArray.push(this.getImageUrl(color.image, { kind: 2, size: 1 }));
    });
    return imagesArray;
  }

  getImageUrl(
    image: Image,
    { kind = ImageKind.modelZoom, size = ImageSize.large }: ImageUrlOptions = {}
  ): string {
    return `https://static.oysho.net/6/photos2${image.url}_${kind}_1_${size}.jpg?t=${image.timestamp}`;
  }

  getPrices(product: ApiProduct) {
    const pricesArray: string[] = [];
    product?.bundleProductSummaries[0]?.detail?.colors?.forEach((color) => {
      color.sizes.forEach((size) =>
        pricesArray.push(this.insertDecimal(Number(size.price)))
      );
    });
    return pricesArray;
  }

  insertDecimal(num: number) {
    return Number((num / 100).toFixed(2)).toString();
  }
}
