export interface Category {
  id: number;
  name: string;
  nameEn: string;
  description: null;
}

/* export interface Product {
  id: number;
  type: string;
  name: string;
  nameEn: string;
  image: null;
  attributes: ProductAttribute[];
  detail: Detail;
} */

export interface ProductAttribute {
  id: string;
  name: string;
  value: string;
  type: string;
  longDescription?: string;
  shortDescription?: string;
}

/* export interface Detail {
  longDescription: string;
  defaultImageType: null;
  composition: Composition[];
  compositionByZone: unknown[];
  care: Care[];
  colors: Color[];
  relatedProducts: unknown[];
  xmediaDefaultSet: null;
  xmedia: Xmedia[];
  relatedElements: unknown[];
  warnings: unknown[];
  familyInfo: FamilyInfo;
  subfamilyInfo: SubfamilyInfo;
  joinLife: string;
  joinType: string;
  isJoinLife: boolean;
  promotions: unknown[];
} */

export interface Composition {
  composition: Care[];
}

export interface Care {
  id: string;
  name: string;
  percentage?: string;
}
