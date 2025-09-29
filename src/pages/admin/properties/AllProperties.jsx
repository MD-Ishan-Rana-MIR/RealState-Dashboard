import React from "react";
import { Eye, Edit, Trash2 } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Beverly Hills",
    location: "Beverly Hills, CA",
    price: "$3,500,000",
    status: "Available",
  },
  {
    id: 2,
    title: "Modern Apartment Downtown",
    location: "New York, NY",
    price: "$1,200,000",
    status: "Sold",
  },
  {
    id: 3,
    title: "Cozy Cottage",
    location: "Portland, OR",
    price: "$850,000",
    status: "Available",
  },
  {
    id: 4,
    title: "Beach House",
    location: "Miami, FL",
    price: "$2,500,000",
    status: "Pending",
  },
];

export default function AllProperties() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Properties</h1>
        {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
          <Eye size={16} /> Add New Property
        </button> */}
      </div>

      <div className="overflow-x-auto bg-white rounded-2xl shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                #
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Location
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {properties.map((property, idx) => (
              <tr key={property.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-700">{idx + 1}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{property.title}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{property.location}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{property.price}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{property.status}</td>
                <td className="px-6 py-4 text-sm text-right flex justify-end gap-2">
                  <button className=" border border-btn text-black px-2 py-1 rounded-lg  flex items-center gap-1">
                    <Eye size={14} /> View
                  </button>
                  <button className=" text-white px-2 py-1 rounded-lg bg-btn flex items-center gap-1">
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
