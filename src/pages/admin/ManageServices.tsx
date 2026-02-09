import { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const ManageServices = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const mockServices = [
        { id: 1, name: 'Manpower Supply', category: 'HR Solutions', status: 'Active' },
        { id: 2, name: 'Stationery Supplies', category: 'Procurement', status: 'Active' },
        { id: 3, name: 'Event Management', category: 'Logistics', status: 'Active' },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Services</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-primary text-white px-6 py-2 rounded-lg flex items-center gap-2 font-semibold hover:bg-opacity-90 transition-all"
                >
                    <Plus size={20} /> Add Service
                </button>
            </div>

            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-4 font-bold text-sm text-gray-600">ID</th>
                            <th className="px-6 py-4 font-bold text-sm text-gray-600">Service Name</th>
                            <th className="px-6 py-4 font-bold text-sm text-gray-600">Category</th>
                            <th className="px-6 py-4 font-bold text-sm text-gray-600">Status</th>
                            <th className="px-6 py-4 font-bold text-sm text-gray-600 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {mockServices.map((service) => (
                            <tr key={service.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm">#{service.id}</td>
                                <td className="px-6 py-4 font-semibold">{service.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{service.category}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md">
                                        {service.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right space-x-3">
                                    <button className="text-blue-500 hover:text-blue-700"><Edit2 size={18} /></button>
                                    <button className="text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[100]">
                    <div className="bg-white w-full max-w-lg rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6">Add New Service</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold mb-1">Service Name</label>
                                <input className="w-full p-3 border rounded-lg" placeholder="e.g. IT Outsourcing" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">Category</label>
                                <input className="w-full p-3 border rounded-lg" placeholder="e.g. Technology" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">Description</label>
                                <textarea className="w-full p-3 border rounded-lg" rows={3} placeholder="Describe the service..."></textarea>
                            </div>
                        </div>
                        <div className="flex justify-end gap-3 mt-8">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-2 border rounded-lg font-bold"
                            >
                                Cancel
                            </button>
                            <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold">
                                Save Service
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageServices;
