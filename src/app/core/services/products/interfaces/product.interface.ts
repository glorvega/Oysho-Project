export interface Category {
  id: number;
  name: string;
  nameEn: string;
  description: null;
}
export interface Product {
  id: number;
  //type: string;
  name: string;
  nameEn: string;
  image: string[];
  longDescription: string;
  prices: string[];
  /* attributes: ProductAttribute[];
  detail: Detail; */
}

/* export interface ApiProduct {
  id: number;
  type: RelatedProductType;
  name: string;
  nameEn: string;
  image: null;
  isBuyable: boolean;
  onSpecial: boolean;
  backSoon: null;
  unitsLot: number;
  isTop: number | null;
  sizeSystem?: string;
  bundleColors: BundleColor[];
  attributes: Attribute[];
  relatedCategories: Category[];
  bundleProductSummaries: BundleProductSummary[];
  detail: ProductDetail;
} */

export interface BundleProductSummary {
  id: number;
  //type: BundleProductSummaryType;
  name: string;
  nameEn: string;
  image: null;
  isBuyable: boolean;
  //productType: ProductType;
  bundleColors: any[];
  tags: any[];
  //attributes: Attribute[];
  detail: BundleProductSummaryDetail;
}

export interface BundleProductSummaryDetail {
  description: null;
  longDescription: string;
  additionalInfo: string;
  reference: string;
  displayReference: string;
  isSport: boolean;
  defaultImageType: null;
  composition: any[];
  compositionByZone: any[];
  care: Care[];
  colors: Color[];
}

export interface ProductAttribute {
  id: string;
  name: string;
  value: string;
  type: string;
  longDescription?: string;
  shortDescription?: string;
}

export interface Detail {
  longDescription: string;
  defaultImageType: null;
  composition: Composition[];
  compositionByZone: unknown[];
  care: Care[];
  colors: Color[];
}

export interface Composition {
  composition: Care[];
}

export interface Care {
  id: string;
  name: string;
  percentage?: string;
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
