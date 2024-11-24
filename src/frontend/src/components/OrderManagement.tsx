import React, { useState } from 'react';
import { Search, Filter, Package, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const OrderManagement = () => {
  const [orders] = useState([
    { 
      id: 'ORD-001', 
      customer: 'John Doe', 
      items: 3,
      total: '$156.00',
      status: 'Processing',
      date: '2024-03-18',
      tracking: 'TRK123456' 
    },
    { 
      id: 'ORD-002', 
      customer: 'Sarah Smith', 
      items: 2,
      total: '$243.50',
      status: 'Shipped',
      date: '2024-03-18',
      tracking: 'TRK789012'
    },
    { 
      id: 'ORD-003', 
      customer: 'Mike Johnson', 
      items: 1,
      total: '$89.99',
      status: 'Delivered',
      date: '2024-03-17',
      tracking: 'TRK345678'
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing':
        return Clock;
      case 'Shipped':
        return Package;
      case 'Delivered':
        return CheckCircle;
      default:
        return AlertCircle;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Tracking
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => {
                const StatusIcon = getStatusIcon(order.status);
                return (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`flex items-center gap-2 text-sm ${
                        order.status === 'Processing' ? 'text-yellow-600' :
                        order.status === 'Shipped' ? 'text-blue-600' :
                        'text-green-600'
                      }`}>
                        <StatusIcon className="h-4 w-4" />
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {order.items}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {order.total}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {order.tracking}
                    </td>
                    <td className="px-6 py-4 text-sm text-blue-600">
                      <button className="hover:text-blue-800">View Details</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
