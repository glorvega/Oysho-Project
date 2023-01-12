import { ApiProduct, Image } from '../interfaces/api-product.interface';
import {
  ImageKind,
  ImageSize,
  ImageUrlOptions,
  Product,
} from '../interfaces/product.interface';

export class ProductUtils {
  static getModifiedProducts(apiProduct: ApiProduct): Product {
    return {
      id: apiProduct.id,
      name: apiProduct.name,
      nameEn: apiProduct.nameEn,
      image: this.getImagesPerProduct(apiProduct),
      longDescription:
        apiProduct.bundleProductSummaries[0]?.detail?.longDescription,
      prices: this.getPrices(apiProduct),
      amount: 0,
    };
  }

  private static getImagesPerProduct(product: ApiProduct) {
    const imagesArray: string[] = [];
    product?.bundleProductSummaries[0]?.detail?.colors?.forEach((color) => {
      imagesArray.push(this.getImageUrl(color.image, { kind: 2, size: 1 }));
    });
    return imagesArray;
  }

  private static getPrices(product: ApiProduct) {
    const pricesArray: string[] = [];
    product?.bundleProductSummaries[0]?.detail?.colors?.forEach((color) => {
      color.sizes.forEach((size) =>
        pricesArray.push(this.insertDecimal(Number(size.price)))
      );
    });
    return pricesArray;
  }

  private static getImageUrl(
    image: Image,
    { kind = ImageKind.modelZoom, size = ImageSize.large }: ImageUrlOptions = {}
  ): string {
    return `https://static.oysho.net/6/photos2${image.url}_${kind}_1_${size}.jpg?t=${image.timestamp}`;
  }

  private static insertDecimal(num: number) {
    return Number((num / 100).toFixed(2)).toString();
  }
}
