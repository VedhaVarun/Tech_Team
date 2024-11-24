import React, { useState } from 'react';
import { 
  BarChart, 
  Package, 
  Clock, 
  TrendingUp, 
  AlertCircle,
  Search,
  Filter,
  RefreshCw
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeView, setActiveView] = useState('overview');
  
  const stats = [
    { title: 'Total Orders', value: '1,234', icon: Package, trend: '+12%' },
    { title: 'Processing', value: '45', icon: Clock, trend: '-5%' },
    { title: 'Revenue', value: '$45,678', icon: TrendingUp, trend: '+8%' },
    { title: 'Inventory Alerts', value: '3', icon: AlertCircle, trend: '-2' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">MCF Platform</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <RefreshCw className="h-5 w-5 text-gray-500" />
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                New Order
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-sm text-green-600">{stat.trend}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
