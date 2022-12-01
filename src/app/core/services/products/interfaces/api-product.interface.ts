export interface ApiCategory {
  categories: ApiCategoryElement[];
}

export interface ApiCategoryElement {
  id: number;
  name: string;
  nameEn: string;
  shortDescription: null;
  description: null;
  keywords: null;
  key: string;
  numberOfProducts: number;
  type: string;
  viewCategoryId: number;
  subcategories: any[];
  attachments: any[];
  sequence: number;
  oldIds: any[];
}

export interface ProductList {
  gridElements: GridElement[];
  products: ApiProduct[];
  rueiData: RueiData;
}

export interface GridElement {
  ccIds: number[];
  type: GridElementType;
  id?: string;
  template?: Template;
  hiddenFields?: any[];
}

export enum Template {
  Bloque2Imagenes = 'bloque2imagenes',
  Bloque3Imagenes = 'bloque3imagenes',
  The1G = '1G',
}

export enum GridElementType {
  Block = 'block',
  Cc = 'CC',
}

export interface ApiProduct {
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
  subFamily: null | string;
  productType: ProductType;
  bundleColors: BundleColor[];
  tags: Tag[];
  attributes: Attribute[];
  relatedCategories: Category[];
  attachments: any[];
  bundleProductSummaries: BundleProductSummary[];
  detail: ProductDetail;
  field5: null | string;
  sequence: number;
  section: null | string;
  family: null | string;
  sectionName?: SectionName;
  sectionNameEN?: SectionName;
  startDate: string;
  isSales: null;
  keywords: string;
  mainColorid: string;
  familyCode: null;
  subFamilyCode: null;
  productUrl?: string;
  productUrlParam: string;
  gridElemType: ProductGridElemType;
  availabilityDate: Date;
  visibilityValue: VisibilityValue;
}

export interface Attribute {
  id: string;
  name: string;
  value: string;
  type: AttributeType;
  shortDescription?: string;
  longDescription?: string;
}

export enum AttributeType {
  Catfilter = 'CATFILTER',
  Xactfilter = 'XACTFILTER',
  XbrandMastersID = 'XBRAND_MASTERS_ID',
  Xcalfilter = 'XCALFILTER',
  Xcatfilter = 'XCATFILTER',
  Xcolfilter = 'XCOLFILTER',
  Xcomprador = 'XCOMPRADOR',
  Xestfilter = 'XESTFILTER',
  Xflag = 'XFLAG',
  XmanCountry = 'XMAN_COUNTRY',
  XmanDate = 'XMAN_DATE',
  Xmanufacturer = 'XMANUFACTURER',
  Xtypfilter = 'XTYPFILTER',
}

export interface BundleColor {
  id: number;
  name: string;
  image: null;
  colorName: null;
  relatedCategories: any[];
  modelName: null;
}

export interface BundleProductSummary {
  id: number;
  type: BundleProductSummaryType;
  name: string;
  nameEn: string;
  image: null;
  isBuyable: boolean;
  onSpecial: boolean;
  backSoon: null;
  unitsLot: number;
  isTop: number;
  sizeSystem: string;
  subFamily: string;
  productType: ProductType;
  bundleColors: any[];
  tags: any[];
  attributes: Attribute[];
  relatedCategories: any[];
  attachments: any[];
  bundleProductSummaries: any[];
  detail: BundleProductSummaryDetail;
  field5: string;
  sequence: number;
  section: string;
  family: string;
  sectionName: SectionName;
  sectionNameEN: SectionName;
  startDate: string;
  productUrl: string;
  gridElemType: BundleProductSummaryGridElemType;
  availabilityDate: Date;
  productUrlTranslations: any[];
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
  relatedProducts: any[];
  xmediaDefaultSet: null;
  xmedia: PurpleXmedia[];
  skuDimensions: Dimensions;
  dimensions: Dimensions;
  familyInfo: FamilyInfo;
  subfamilyInfo: SubfamilyInfo;
  isJoinLife: boolean;
  compositionDetail: null;
  joinLife?: string;
}

export interface Care {
  id: string;
  name: string;
  description: string;
}

export interface Color {
  id: string;
  name: string;
  modelHeigh: null;
  modelName: null;
  modelSize: null;
  image: Image;
  sizes: Size[];
  isContinuity: boolean;
  joinLifeInfo: JoinLifeInfo;
  compositionDetail: null;
  colFilter: any[];
}

export interface Image {
  timestamp: string;
  url: string;
  aux: string[];
  type: string[];
  style: string[];
  availableEstilismo: boolean;
}

export interface JoinLifeInfo {
  descJoinLife: string;
  isJoinLife: boolean;
  joinLifeId?: JoinLifeID;
  shortDescJoinLife?: string;
}

export enum JoinLifeID {
  Jl13 = 'JL 13',
  Jl66 = 'JL 66',
  Jl68 = 'JL 68',
  Jl76 = 'JL 76',
  Jl98 = 'JL 98',
}

export interface Size {
  sku: number;
  name: string;
  description: null;
  partnumber: string;
  isBuyable: boolean;
  backSoon: null | string;
  mastersSizeId: string;
  position: number;
  price: string;
  oldPrice: null;
  sizeType: string;
  visibilityValue?: VisibilityValue;
}

export enum VisibilityValue {
  BackSoon = 'BACK_SOON',
  Hidden = 'HIDDEN',
  Show = 'SHOW',
}

export interface Dimensions {}

export interface FamilyInfo {
  familyId: number | null;
  familyCode: number | null;
  familyName: null;
}

export interface SubfamilyInfo {
  subFamilyId: number | null;
  subFamilyCode: number | null;
  subFamilyName: null;
}

export interface PurpleXmedia {
  path: string;
  xmediaItems: PurpleXmediaItem[];
  colorCode: string;
  xmediaLocations: XmediaLocation[];
}

export interface PurpleXmediaItem {
  medias: PurpleMedia[];
  set: number;
}

export interface PurpleMedia {
  format: number;
  clazz: number;
  idMedia: string;
  extraInfo: PurpleExtraInfo | null;
  timestamp: number;
}

export interface PurpleExtraInfo {
  vimeo: Vimeo[];
}

export interface Vimeo {
  size: number;
  url: string;
  id: string;
}

export interface XmediaLocation {
  locations: Location[];
  set: number;
}

export interface Location {
  mediaLocations: string[];
  location: number;
}

export enum BundleProductSummaryGridElemType {
  Product = 'PRODUCT',
}

export enum ProductType {
  Clothing = 'Clothing',
  Footwear = 'Footwear',
}

export enum SectionName {
  Women = 'WOMEN',
}

export enum BundleProductSummaryType {
  ProductBean = 'ProductBean',
}

export interface ProductDetail {
  description: null;
  longDescription: null | string;
  additionalInfo: string;
  reference: string;
  displayReference: string;
  isSport: boolean;
  defaultImageType: null | string;
  composition: any[];
  compositionByZone: any[];
  care: any[];
  colors: any[];
  relatedProducts: RelatedProduct[];
  xmediaDefaultSet: number | null;
  xmedia: FluffyXmedia[] | null;
  skuDimensions: Dimensions;
  dimensions: Dimensions;
  familyInfo: FamilyInfo;
  subfamilyInfo: SubfamilyInfo;
  isJoinLife: boolean;
  compositionDetail: null;
}

export interface RelatedProduct {
  id: number;
  image: null;
  name: string;
  nameEN: string;
  isBuyable: boolean;
  type: RelatedProductType;
  sequence: string;
  section: string;
  relationType: RelationType;
  relatedCategories: Category[];
  detail: RelatedProductDetail;
  bundleProductSummaries: BundleProductSummary[];
  colors: any[];
  family: string;
  subFamily: string;
  productUrl: string;
}

export interface RelatedProductDetail {
  reference: string;
  colors: any[];
  isJoinLife: boolean;
}

export interface Category {
  id: number;
  identifier: Identifier;
  name: Name | null;
  urlCategory: boolean;
}

export enum Identifier {
  AApVertodo = 'A_AP_VERTODO#',
  ABBolsos = 'A_B_BOLSOS#',
  ABVertodo = 'A_B_VERTODO#',
  ADestacados = 'A_DESTACADOS#',
  APunto = 'A_PUNTO#',
  ASport = 'A_SPORT#',
  Chaquetass = 'CHAQUETASS#',
  DAccesoriosBolsas = 'D_ACCESORIOS_BOLSAS',
  DAccesoriosVerTodo = 'D_ACCESORIOS_VER_TODO#',
  DBotas = 'D_BOTAS#',
  DCalcetines = 'D_CALCETINES#',
  DCamisetasMangaLarga = 'D_CAMISETAS_MANGA_LARGA',
  DCamisetasSki = 'D_CAMISETAS_SKI#',
  DCamisetasVertodo = 'D_CAMISETAS_VERTODO',
  DChaquetasAcolchada = 'D_CHAQUETAS_ACOLCHADA#',
  DChaquetasChalecos = 'D_CHAQUETAS_CHALECOS#',
  DChaquetasSki = 'D_CHAQUETAS_SKI#',
  DChaquetasVertodo = 'D_CHAQUETAS_VERTODO#',
  DLeggingsSki = 'D_LEGGINGS_SKI#',
  DLeggingsVertodo = 'D_LEGGINGS_VERTODO#',
  DPPantalonesFlare = 'D_P_PANTALONES_FLARE#',
  DPSki = 'D_P_SKI#',
  DPantalonesRecto = 'D_PANTALONES_RECTO#',
  DPantalonesVertodo = 'D_PANTALONES_VERTODO',
  DSkicollectionCatMTagnew = 'D_SKICOLLECTION#CAT_--M_TAGNEW--',
  DVestidosymonos = 'D_VESTIDOSYMONOS#',
  GiftGuideMenos20 = 'GIFT_GUIDE_MENOS_20#',
  GiftGuideSki = 'GIFT_GUIDE_SKI#',
  GiftGuideVertodo = 'GIFT_GUIDE_VERTODO#',
  Guiadecapas = 'GUIADECAPAS#',
  LAccesorios = 'L_ACCESORIOS_#',
  OyshoWinterDComingsoonLabelnousar = 'OYSHO_WINTER-D_COMINGSOON_LABELNOUSAR',
  OyshoWinterNewsLabelTop = 'OYSHO_WINTER_NEWS_LABEL_TOP',
  PAccesorrios = 'P_ACCESORRIOS#',
  SkiicollectionMTagnew = 'SKIICOLLECTION#--M_TAGNEW--',
  Ultimasemana = 'ULTIMASEMANA#',
  ZBotas = 'Z_BOTAS#',
  ZDestacados = 'Z_DESTACADOS#',
}

export enum Name {
  Accesorios = 'ACCESORIOS',
  Acolchadas = 'Acolchadas',
  BolsasDeDeporte = 'Bolsas de deporte',
  Bolsos = 'Bolsos',
  Botas = 'BOTAS',
  Calcetines = 'CALCETINES',
  Chalecos = 'Chalecos',
  ChaquetasIChalecos = 'CHAQUETAS I CHALECOS',
  Destacados = 'DESTACADOS',
  Flare = 'Flare',
  GuíaDeCapas = 'GUÍA DE CAPAS',
  MangaLarga = 'Manga larga',
  MenosDe20 = 'MENOS DE 20€',
  MonosIVestidos = 'MONOS I VESTIDOS',
  NameVERTODO = 'VER TODO',
  NameVerTodo = 'Ver todo',
  Punto = 'PUNTO',
  Recto = 'Recto',
  Ski = 'Ski',
  SkiCollection = 'SKI COLLECTION',
  Sport = 'SPORT',
  VerTodo = 'Ver Todo',
  ÚltimaSemana = 'ÚLTIMA SEMANA',
}

export enum RelationType {
  Accessory = 'ACCESSORY',
  XAlsolike = 'X-ALSOLIKE',
  XSell = 'X-SELL',
}

export enum RelatedProductType {
  BundleBean = 'BundleBean',
}

export interface FluffyXmedia {
  path: string;
  xmediaItems: FluffyXmediaItem[];
  colorCode: string;
  xmediaLocations: XmediaLocation[];
}

export interface FluffyXmediaItem {
  medias: FluffyMedia[];
  set: number;
}

export interface FluffyMedia {
  format: number;
  clazz: number;
  idMedia: string;
  extraInfo: FluffyExtraInfo | null;
  timestamp: number;
}

export interface FluffyExtraInfo {
  type: string;
  regions: Region[];
}

export interface Region {
  area: Area;
  link: Link;
}

export interface Area {
  y1: number;
  x1: number;
  y2: number;
  x2: number;
}

export interface Link {
  datatype: string;
  id: number;
}

export enum ProductGridElemType {
  Bundle = 'BUNDLE',
  Estilismo = 'ESTILISMO',
  Mocaco = 'MOCACO',
}

export interface Tag {
  category: Category;
  attachments: Attachment[];
}

export interface Attachment {
  id: string;
  name: string;
  path: string;
  type: string;
}

export interface RueiData {
  StoreLangRUEI: string;
  StoreTypeRUEI: string;
  OperationTypeRUEI: string;
  OperationRUEI: string;
  StoreIdRUEI: string;
}
