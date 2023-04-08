export interface PeriodicElement {
  category: string;
  product: string;
  saleQty: string;
  price: string;
  total: string,
}

export interface OrderItemRange {
  priceMin: number;
  priceMax: number;
  saleQtyMin: number;
  saleQtyMax: number;
  totalMin: number;
  totalMax: number;
}

export enum OPERATOR {
  LESS,
  MORE,
  EQUAL,
}
