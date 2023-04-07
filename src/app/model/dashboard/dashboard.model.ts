export interface CostData {
  type: string;
  icon: string;
  current: number;
  last: number;
}

export interface ProductDashboard {
  index: number;
  name: string;
  price: number;
  qty: number;
  total: number;
}

export interface MarketingData {
  service: string[];
  network: string[]
}
