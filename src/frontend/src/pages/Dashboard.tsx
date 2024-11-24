import React, { useState } from 'react';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import InventoryManagement from '../components/InventoryManagement';
import OrderManagement from '../components/OrderManagement';
import { 
  LayoutGrid, 
  Package, 
  ShoppingCart, 
  BarChart, 
  Settings 
} from 'lucide-react';

const Dashboard = () => {
  const [activeView, setActiveView] = useState('overview');

  const renderContent = () => {
    switch (activeView) {
      case 'inventory':
        return <InventoryManagement />;
      case 'orders':
        return <OrderManagement />;
      case 'analytics':
        return <AnalyticsDashboard />;
      default:
        return <AnalyticsDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900">MCF Platform</h1>
        </div>
        <nav className="mt-6">
          <button
            onClick={() => setActiveView('overview')}
            className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium ${
              activeView === 'overview' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <LayoutGrid className="h-5 w-5" />
            Overview
          </button>
          <button
            onClick={() => setActiveView('inventory')}
            className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium ${
              activeView === 'inventory' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Package className="h-5 w-5" />
            Inventory
          </button>
          <button
            onClick={() => setActiveView('orders')}
            className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium ${
              activeView === 'orders' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <ShoppingCart className="h-5 w-5" />
            Orders
          </button>
          <button
            onClick={() => setActiveView('analytics')}
            className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium ${
              activeView === 'analytics' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BarChart className="h-5 w-5" />
            Analytics
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
