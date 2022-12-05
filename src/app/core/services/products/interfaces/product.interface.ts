export interface Category {
  id: number;
  name: string;
  nameEn: string;
  description: null;
}
export interface Product {
  id: number;
  name: string;
  nameEn: string;
  image: string[];
  longDescription: string;
  prices: string[];
}

export const enum ImageSize {
  fullSize = 1,
  extraLarge = 2,
  large = 3,
  medium = 4,
  small = 5,
}

export const enum ImageKind {
  modelZoom = 1,
  modelFront = 2,
  color = 3,
  productFront = 4,
  productBack = 5,
  modelBack = 6,
}

export interface ImageUrlOptions {
  kind?: ImageKind;
  size?: ImageSize;
}

export interface BundleProductSummary {
  id: number;
  name: string;
  nameEn: string;
  image: null;
  isBuyable: boolean;
  bundleColors: any[];
  tags: any[];
  detail: BundleProductSummaryDetail;
}

export interface BundleProductSummaryDetail {
  description: null;
  longDescription: string;
  colors: Color[];
}

export interface Color {
  id: string;
  name: string;
  sizes: Size[];
}

export interface Size {
  sku: number;
  name: string;
  description: null;
  price: string;
}
