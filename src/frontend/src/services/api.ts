import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4001';

export const api = {
  inventory: {
    getAll: () => axios.get(`${API_URL}/api/inventory`),
    getById: (id: string) => axios.get(`${API_URL}/api/inventory/${id}`),
    update: (data: any) => axios.post(`${API_URL}/api/inventory`, data),
  },
  orders: {
    getAll: () => axios.get(`${API_URL}/api/orders`),
    getById: (id: string) => axios.get(`${API_URL}/api/orders/${id}`),
    create: (data: any) => axios.post(`${API_URL}/api/orders`, data),
  },
  analytics: {
    getDashboard: () => axios.get(`${API_URL}/api/analytics/dashboard`),
    getMetrics: () => axios.get(`${API_URL}/api/analytics/metrics`),
  },
};
