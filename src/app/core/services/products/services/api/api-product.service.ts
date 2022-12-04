import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  ApiCategory,
  ApiProduct,
  ApiProductList,
  Image,
} from '../../interfaces/api-product.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../../interfaces/product.interface';

const enum ImageSize {
  fullSize = 1,
  extraLarge = 2,
  large = 3,
  medium = 4,
  small = 5,
}

const enum ImageKind {
  modelZoom = 1,
  modelFront = 2,
  color = 3,
  productFront = 4,
  productBack = 5,
  modelBack = 6,
}

interface ImageUrlOptions {
  kind?: ImageKind;
  size?: ImageSize;
}
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

  getProductList(id: string): Observable<ApiProductList> {
    return this.http.get<ApiProductList>(`${this.base}/category/${id}/product`);
  } //en array

  getProductsDetails(catId: string, prodId: string): Observable<ApiProduct> {
    return this.http.get<ApiProduct>(
      `${this.base}/category/${catId}/product/${prodId}/detail`
    );
  } //en objeto

  getImagesPerProduct(product: ApiProduct) {
    console.log(product);
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
