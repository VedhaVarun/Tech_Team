export interface InventoryItem {
  sku: string;
  name: string;
  quantity: number;
  reserved: number;
  available: number;
  status: string;
}

export interface Order {
  id: string;
  customer: string;
  items: number;
  total: string;
  status: string;
  date: string;
  tracking: string;
}

export interface AnalyticsData {
  orders: number;
  revenue: number;
  processing: number;
  alerts: number;
}
