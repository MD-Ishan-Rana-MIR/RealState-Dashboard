import React from "react";
import { Eye, Edit, Trash2 } from "lucide-react";

const pendingClients = [
  {
    id: 1,
    name: "David Brown",
    email: "david@example.com",
    phone: "+1 444 987 6543",
    inquiries: 1,
    status: "Pending",
  },
  {
    id: 2,
    name: "Sophia Green",
    email: "sophia@example.com",
    phone: "+1 333 222 1111",
    inquiries: 3,
    status: "Pending",
  },
  {
    id: 3,
    name: "James White",
    email: "james@example.com",
    phone: "+1 555 666 7777",
    inquiries: 2,
    status: "Pending",
  },
];

export default function ClientRequest() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Pending Clients</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
          <Eye size={16} /> Add New Client
        </button>
      </div>

      {/* Pending Clients Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">#</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Inquiries</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pendingClients.map((client, idx) => (
              <tr key={client.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-700">{idx + 1}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{client.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{client.email}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{client.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{client.inquiries}</td>
                <td className="px-6 py-4 text-sm text-yellow-600 font-semibold">{client.status}</td>
                <td className="px-6 py-4 text-sm text-right flex justify-end gap-2">
                  <button className=" border border-btn  text-black px-2 py-1 rounded-lg  flex items-center gap-1">
                    <Eye size={14} /> View
                  </button>
                  <button className="bg-btn text-white px-2 py-1 rounded-lg  flex items-center gap-1">
                    <Edit size={14} /> Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 flex items-center gap-1">
                    <Trash2 size={14} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
