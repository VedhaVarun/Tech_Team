import React, { useState, useEffect } from 'react';
import { Search, Filter, Plus, RefreshCw, Save, X, AlertTriangle } from 'lucide-react';

interface InventoryItem {
  sku: string;
  name: string;
  quantity: number;
  reserved: number;
  available: number;
  status: string;
  lastUpdated?: string;
}

const InventoryManagement = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([
    { sku: 'PROD001', name: 'Eco Bottle', quantity: 150, reserved: 10, available: 140, status: 'In Stock', lastUpdated: '2024-03-24' },
    { sku: 'PROD002', name: 'Bamboo Set', quantity: 50, reserved: 5, available: 45, status: 'Low Stock', lastUpdated: '2024-03-24' },
    { sku: 'PROD003', name: 'Hemp Bag', quantity: 200, reserved: 15, available: 185, status: 'In Stock', lastUpdated: '2024-03-24' },
    { sku: 'PROD004', name: 'Organic Tea Set', quantity: 10, reserved: 8, available: 2, status: 'Critical Stock', lastUpdated: '2024-03-24' }
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<InventoryItem>>({});
  const [syncStatus, setSyncStatus] = useState<string | null>(null);

  // Demo: Simulate loading state
  const handleSync = async () => {
    setIsLoading(true);
    setSyncStatus('Syncing with Amazon MCF...');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSyncStatus('Sync completed successfully');
    setIsLoading(false);
    
    // Clear status after 3 seconds
    setTimeout(() => setSyncStatus(null), 3000);
  };

  // Filter inventory based on search
  const filteredInventory = inventory.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = () => {
    if (newProduct.sku && newProduct.name && newProduct.quantity) {
      const product: InventoryItem = {
        sku: newProduct.sku,
        name: newProduct.name,
        quantity: Number(newProduct.quantity),
        reserved: 0,
        available: Number(newProduct.quantity),
        status: Number(newProduct.quantity) > 50 ? 'In Stock' : 'Low Stock',
        lastUpdated: new Date().toISOString().split('T')[0]
      };

      setInventory([...inventory, product]);
      setShowAddModal(false);
      setNewProduct({});
    }
  };

  const AddProductModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add New Product</h2>
          <button onClick={() => setShowAddModal(false)}>
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">SKU</label>
            <input
              type="text"
              className="mt-1 w-full border rounded-md p-2"
              value={newProduct.sku || ''}
              onChange={e => setNewProduct({...newProduct, sku: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              className="mt-1 w-full border rounded-md p-2"
              value={newProduct.name || ''}
              onChange={e => setNewProduct({...newProduct, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              className="mt-1 w-full border rounded-md p-2"
              value={newProduct.quantity || ''}
              onChange={e => setNewProduct({...newProduct, quantity: Number(e.target.value)})}
            />
          </div>
          <button
            onClick={handleAddProduct}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );

  const LowStockAlert = () => {
    const lowStockItems = inventory.filter(item => item.available < 50);
    if (lowStockItems.length === 0) return null;

    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
        <div className="flex items-center">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
          <span className="text-yellow-700">
            {lowStockItems.length} products have low stock levels
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <LowStockAlert />
      
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search inventory..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            Filter
          </button>
        </div>
        <div className="flex gap-2">
          <button 
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg ${
              isLoading ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
            onClick={handleSync}
            disabled={isLoading}
          >
            <RefreshCw className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Syncing...' : 'Sync'}
          </button>
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="h-5 w-5" />
            Add Product
          </button>
        </div>
      </div>

      {syncStatus && (
        <div className="bg-blue-50 text-blue-700 p-4 rounded-lg">
          {syncStatus}
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SKU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reserved
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Available
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInventory.map((item) => (
                <tr key={item.sku} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.sku}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.reserved}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.available}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.status === 'In Stock' 
                        ? 'bg-green-100 text-green-800'
                        : item.status === 'Critical Stock'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.lastUpdated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                    <button className="hover:text-blue-800">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && <AddProductModal />}
    </div>
  );
};

export default InventoryManagement;
