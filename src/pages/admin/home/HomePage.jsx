import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Home, DollarSign } from "lucide-react";

const clients = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "+1 123 456 7890" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "+1 987 654 3210" },
  { id: 3, name: "Carol Williams", email: "carol@example.com", phone: "+1 555 123 4567" },
];

const properties = [
  { id: 1, title: "Luxury Villa", location: "New York", price: "$1,200,000" },
  { id: 2, title: "Modern Apartment", location: "Los Angeles", price: "$800,000" },
  { id: 3, title: "Beach House", location: "Miami", price: "$2,500,000" },
];

const revenueData = [
  { month: "Jan", revenue: 40000 },
  { month: "Feb", revenue: 50000 },
  { month: "Mar", revenue: 35000 },
  { month: "Apr", revenue: 60000 },
  { month: "May", revenue: 45000 },
];

export default function HomePage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Users size={24} className="text-blue-600" />
          </div>
          <div>
            <p className="text-gray-500">Total Clients</p>
            <h2 className="text-xl font-bold text-gray-800">150</h2>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <Home size={24} className="text-green-600" />
          </div>
          <div>
            <p className="text-gray-500">Total Properties</p>
            <h2 className="text-xl font-bold text-gray-800">85</h2>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow flex items-center gap-4">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <DollarSign size={24} className="text-yellow-600" />
          </div>
          <div>
            <p className="text-gray-500">Total Revenue</p>
            <h2 className="text-xl font-bold text-gray-800">$320,000</h2>
          </div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Revenue Analytics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Clients */}
        <div className="bg-white p-6 rounded-2xl shadow overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">Recent Clients</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">#</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Phone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {clients.map((client, idx) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">{idx + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{client.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{client.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{client.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Properties */}
        <div className="bg-white p-6 rounded-2xl shadow overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">Recent Properties</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">#</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {properties.map((property, idx) => (
                <tr key={property.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">{idx + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{property.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{property.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{property.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
