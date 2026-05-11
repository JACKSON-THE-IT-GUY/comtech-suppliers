import React, { useState } from 'react';
import { products as initialProducts } from '../../services/productData';

const Dashboard = () => {
  const [inventory, setInventory] = useState(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Computing Solutions',
    price: '',
    image: ''
  });

  // Handle Image Upload from Gallery
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({...newProduct, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const productToAdd = {
      ...newProduct,
      id: Date.now(), // Unique ID based on timestamp
      description: "Inventory updated via Admin Portal.",
      image: newProduct.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500"
    };
    setInventory([...inventory, productToAdd]);
    setIsModalOpen(false);
    setNewProduct({ name: '', category: 'Computing Solutions', price: '', image: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">
              Inventory Management
            </h1>
            <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">
              Control Center / ComTech Suppliers
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors"
          >
            Add New Product
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Preview
                </th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Product Name
                </th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Category
                </th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Price
                </th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {inventory.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-slate-50 transition-colors text-sm"
                >
                  <td className="px-6 py-2">
                    <img
                      src={product.image}
                      alt=""
                      className="w-12 h-12 object-cover border border-slate-200 shadow-sm"
                    />
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 italic text-slate-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {product.price}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-red-600 hover:text-red-800 text-[10px] font-bold uppercase">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white max-w-md w-full p-8 border border-slate-200 shadow-2xl">
              <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
                Register New Stock
              </h2>
              <form onSubmit={handleAddProduct} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-widest">
                    Product Name
                  </label>
                  <input
                    required
                    className="w-full border border-slate-300 p-2 text-sm outline-none focus:border-blue-600"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-widest">
                    Upload Photo
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-bold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-widest">
                    Price(K)
                  </label>
                  <input
                    required
                    className="w-full border border-slate-300 p-2 text-sm outline-none focus:border-blue-600"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value })}
                  />
                </div>
                <div className="flex gap-3 pt-6">
                  <button
                    type="submit"
                    className="flex-1 bg-slate-900 text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors"
                  >
                    Save Item
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 bg-slate-100 text-slate-600 py-3 text-xs font-bold uppercase tracking-widest"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
