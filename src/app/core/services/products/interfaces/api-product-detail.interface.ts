export interface Product {
  id: number;
  type: string;
  name: string;
  nameEn: string;
  image: null;
  backSoon: string;
  unitsLot: number;
  isTop: number;
  sizeSystem: string;
  subFamily: string;
  productType: string;
  bundleColors: unknown[];
  tags: unknown[];
  attributes: ProductAttribute[];
  relatedCategories: unknown[];
  attachments: unknown[];
  bundleProductSummaries: unknown[];
  detail: Detail;
  field5: string;
  section: string;
  family: string;
  sectionName: string;
  sectionNameEN: string;
  startDate: string;
  keywords: string;
  mainColorid: string;
  familyCode: string;
  subFamilyCode: string;
  productUrl: string;
  gridElemType: string;
  availabilityDate: Date;
  visibilityValue: string;
  alternativeProductId: number;
  isBuyable: boolean;
  onSpecial: boolean;
  rueiData: RueiData;
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
  description: string;
  longDescription: string;
  additionalInfo: string;
  reference: string;
  displayReference: string;
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
}

export interface Care {
  id: string;
  name: string;
  description: string;
  percentage?: string;
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
  composition: Composition[];
  compositionByZone: unknown[];
  joinLifeInfo: JoinLifeInfo;
  colFilter: unknown[];
}

export interface Composition {
  part: string;
  composition: Care[];
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
  isJoinLife: boolean;
  joinLifeId: string;
  descJoinLife: string;
  shortDescJoinLife: string;
}

export interface Size {
  sku: number;
  name: string;
  description: null;
  partnumber: string;
  isBuyable: boolean;
  backSoon: string;
  mastersSizeId: string;
  position: number;
  price: string;
  oldPrice: null;
  sizeType: string;
  skuDimensions: unknown[];
  visibilityValue: string;
  attributes: SizeAttribute[];
}

export interface SizeAttribute {
  name: string;
}

export interface FamilyInfo {
  familyId: number;
  familyCode: number;
}

export interface SubfamilyInfo {
  subFamilyId: number;
  subFamilyCode: number;
  subFamilyName: null;
}

export interface Xmedia {
  path: string;
  xmediaItems: XmediaItem[];
  colorCode: string;
  xmediaLocations: XmediaLocation[];
}

export interface XmediaItem {
  medias: Media[];
  set: number;
}

export interface Media {
  format: number;
  clazz: number;
  idMedia: string;
  timestamp: number;
  extraInfo: ExtraInfo;
}

export interface ExtraInfo {
  vimeo?: Vimeo[];
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

export interface RueiData {
  StoreLangRUEI: string;
  StoreTypeRUEI: string;
  OperationTypeRUEI: string;
  OperationRUEI: string;
  StoreIdRUEI: string;
}
/* 
export class Convert {
    public static toProduct(json: string): Product {
        return cast(JSON.parse(json), r("Product"));
    }

    public static productToJson(value: Product): string {
        return JSON.stringify(uncast(value, r("Product")), null, 2);
    }
}

function invalidValue(typ: unknown, val: unknown, key: unknown = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: unknown): unknown {
    if (typ.jsonToJS === undefined) {
        const map: unknown = {};
        typ.props.forEach((p: unknown) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: unknown): unknown {
    if (typ.jsToJSON === undefined) {
        const map: unknown = {};
        typ.props.forEach((p: unknown) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: unknown, typ: unknown, getProps: unknown, key: unknown = ''): unknown {
    function transformPrimitive(typ: string, val: unknown): unknown {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: unknown[], val: unknown): unknown {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: unknown): unknown {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: unknown, val: unknown): unknown {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: unknown): unknown {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: unknown }, additional: unknown, val: unknown): unknown {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: unknown = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "unknown") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: unknown, typ: unknown): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: unknown): unknown {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: unknown) {
    return { arrayItems: typ };
}

function u(...typs: unknown[]) {
    return { unionMembers: typs };
}

function o(props: unknown[], additional: unknown) {
    return { props, additional };
}

function m(additional: unknown) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: unknown = {
    "Product": o([
        { json: "id", js: "id", typ: 0 },
        { json: "type", js: "type", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "nameEn", js: "nameEn", typ: "" },
        { json: "image", js: "image", typ: null },
        { json: "backSoon", js: "backSoon", typ: "" },
        { json: "unitsLot", js: "unitsLot", typ: 0 },
        { json: "isTop", js: "isTop", typ: 0 },
        { json: "sizeSystem", js: "sizeSystem", typ: "" },
        { json: "subFamily", js: "subFamily", typ: "" },
        { json: "productType", js: "productType", typ: "" },
        { json: "bundleColors", js: "bundleColors", typ: a("unknown") },
        { json: "tags", js: "tags", typ: a("unknown") },
        { json: "attributes", js: "attributes", typ: a(r("ProductAttribute")) },
        { json: "relatedCategories", js: "relatedCategories", typ: a("unknown") },
        { json: "attachments", js: "attachments", typ: a("unknown") },
        { json: "bundleProductSummaries", js: "bundleProductSummaries", typ: a("unknown") },
        { json: "detail", js: "detail", typ: r("Detail") },
        { json: "field5", js: "field5", typ: "" },
        { json: "section", js: "section", typ: "" },
        { json: "family", js: "family", typ: "" },
        { json: "sectionName", js: "sectionName", typ: "" },
        { json: "sectionNameEN", js: "sectionNameEN", typ: "" },
        { json: "startDate", js: "startDate", typ: "" },
        { json: "keywords", js: "keywords", typ: "" },
        { json: "mainColorid", js: "mainColorid", typ: "" },
        { json: "familyCode", js: "familyCode", typ: "" },
        { json: "subFamilyCode", js: "subFamilyCode", typ: "" },
        { json: "productUrl", js: "productUrl", typ: "" },
        { json: "gridElemType", js: "gridElemType", typ: "" },
        { json: "availabilityDate", js: "availabilityDate", typ: Date },
        { json: "visibilityValue", js: "visibilityValue", typ: "" },
        { json: "alternativeProductId", js: "alternativeProductId", typ: 0 },
        { json: "isBuyable", js: "isBuyable", typ: true },
        { json: "onSpecial", js: "onSpecial", typ: true },
        { json: "rueiData", js: "rueiData", typ: r("RueiData") },
    ], false),
    "ProductAttribute": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "value", js: "value", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "longDescription", js: "longDescription", typ: u(undefined, "") },
        { json: "shortDescription", js: "shortDescription", typ: u(undefined, "") },
    ], false),
    "Detail": o([
        { json: "description", js: "description", typ: "" },
        { json: "longDescription", js: "longDescription", typ: "" },
        { json: "additionalInfo", js: "additionalInfo", typ: "" },
        { json: "reference", js: "reference", typ: "" },
        { json: "displayReference", js: "displayReference", typ: "" },
        { json: "defaultImageType", js: "defaultImageType", typ: null },
        { json: "composition", js: "composition", typ: a(r("Composition")) },
        { json: "compositionByZone", js: "compositionByZone", typ: a("unknown") },
        { json: "care", js: "care", typ: a(r("Care")) },
        { json: "colors", js: "colors", typ: a(r("Color")) },
        { json: "relatedProducts", js: "relatedProducts", typ: a("unknown") },
        { json: "xmediaDefaultSet", js: "xmediaDefaultSet", typ: null },
        { json: "xmedia", js: "xmedia", typ: a(r("Xmedia")) },
        { json: "relatedElements", js: "relatedElements", typ: a("unknown") },
        { json: "warnings", js: "warnings", typ: a("unknown") },
        { json: "familyInfo", js: "familyInfo", typ: r("FamilyInfo") },
        { json: "subfamilyInfo", js: "subfamilyInfo", typ: r("SubfamilyInfo") },
        { json: "joinLife", js: "joinLife", typ: "" },
        { json: "joinType", js: "joinType", typ: "" },
        { json: "isJoinLife", js: "isJoinLife", typ: true },
        { json: "promotions", js: "promotions", typ: a("unknown") },
    ], false),
    "Care": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "percentage", js: "percentage", typ: u(undefined, "") },
    ], false),
    "Color": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "modelHeigh", js: "modelHeigh", typ: null },
        { json: "modelName", js: "modelName", typ: null },
        { json: "modelSize", js: "modelSize", typ: null },
        { json: "image", js: "image", typ: r("Image") },
        { json: "sizes", js: "sizes", typ: a(r("Size")) },
        { json: "isContinuity", js: "isContinuity", typ: true },
        { json: "composition", js: "composition", typ: a(r("Composition")) },
        { json: "compositionByZone", js: "compositionByZone", typ: a("unknown") },
        { json: "joinLifeInfo", js: "joinLifeInfo", typ: r("JoinLifeInfo") },
        { json: "colFilter", js: "colFilter", typ: a("unknown") },
    ], false),
    "Composition": o([
        { json: "part", js: "part", typ: "" },
        { json: "composition", js: "composition", typ: a(r("Care")) },
    ], false),
    "Image": o([
        { json: "timestamp", js: "timestamp", typ: "" },
        { json: "url", js: "url", typ: "" },
        { json: "aux", js: "aux", typ: a("") },
        { json: "type", js: "type", typ: a("") },
        { json: "style", js: "style", typ: a("") },
        { json: "availableEstilismo", js: "availableEstilismo", typ: true },
    ], false),
    "JoinLifeInfo": o([
        { json: "isJoinLife", js: "isJoinLife", typ: true },
        { json: "joinLifeId", js: "joinLifeId", typ: "" },
        { json: "descJoinLife", js: "descJoinLife", typ: "" },
        { json: "shortDescJoinLife", js: "shortDescJoinLife", typ: "" },
    ], false),
    "Size": o([
        { json: "sku", js: "sku", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: null },
        { json: "partnumber", js: "partnumber", typ: "" },
        { json: "isBuyable", js: "isBuyable", typ: true },
        { json: "backSoon", js: "backSoon", typ: "" },
        { json: "mastersSizeId", js: "mastersSizeId", typ: "" },
        { json: "position", js: "position", typ: 0 },
        { json: "price", js: "price", typ: "" },
        { json: "oldPrice", js: "oldPrice", typ: null },
        { json: "sizeType", js: "sizeType", typ: "" },
        { json: "skuDimensions", js: "skuDimensions", typ: a("unknown") },
        { json: "visibilityValue", js: "visibilityValue", typ: "" },
        { json: "attributes", js: "attributes", typ: a(r("SizeAttribute")) },
    ], false),
    "SizeAttribute": o([
        { json: "name", js: "name", typ: "" },
    ], false),
    "FamilyInfo": o([
        { json: "familyId", js: "familyId", typ: 0 },
        { json: "familyCode", js: "familyCode", typ: 0 },
    ], false),
    "SubfamilyInfo": o([
        { json: "subFamilyId", js: "subFamilyId", typ: 0 },
        { json: "subFamilyCode", js: "subFamilyCode", typ: 0 },
        { json: "subFamilyName", js: "subFamilyName", typ: null },
    ], false),
    "Xmedia": o([
        { json: "path", js: "path", typ: "" },
        { json: "xmediaItems", js: "xmediaItems", typ: a(r("XmediaItem")) },
        { json: "colorCode", js: "colorCode", typ: "" },
        { json: "xmediaLocations", js: "xmediaLocations", typ: a(r("XmediaLocation")) },
    ], false),
    "XmediaItem": o([
        { json: "medias", js: "medias", typ: a(r("Media")) },
        { json: "set", js: "set", typ: 0 },
    ], false),
    "Media": o([
        { json: "format", js: "format", typ: 0 },
        { json: "clazz", js: "clazz", typ: 0 },
        { json: "idMedia", js: "idMedia", typ: "" },
        { json: "timestamp", js: "timestamp", typ: 0 },
        { json: "extraInfo", js: "extraInfo", typ: r("ExtraInfo") },
    ], false),
    "ExtraInfo": o([
        { json: "vimeo", js: "vimeo", typ: u(undefined, a(r("Vimeo"))) },
    ], false),
    "Vimeo": o([
        { json: "size", js: "size", typ: 0 },
        { json: "url", js: "url", typ: "" },
        { json: "id", js: "id", typ: "" },
    ], false),
    "XmediaLocation": o([
        { json: "locations", js: "locations", typ: a(r("Location")) },
        { json: "set", js: "set", typ: 0 },
    ], false),
    "Location": o([
        { json: "mediaLocations", js: "mediaLocations", typ: a("") },
        { json: "location", js: "location", typ: 0 },
    ], false),
    "RueiData": o([
        { json: "StoreLangRUEI", js: "StoreLangRUEI", typ: "" },
        { json: "StoreTypeRUEI", js: "StoreTypeRUEI", typ: "" },
        { json: "OperationTypeRUEI", js: "OperationTypeRUEI", typ: "" },
        { json: "OperationRUEI", js: "OperationRUEI", typ: "" },
        { json: "StoreIdRUEI", js: "StoreIdRUEI", typ: "" },
    ], false),
};
 */
