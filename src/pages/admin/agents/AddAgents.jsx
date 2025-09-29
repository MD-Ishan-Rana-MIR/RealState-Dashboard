import React from "react";

export default function AddAgents() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10 border border-gray-100">
      <h2 className="text-2xl font-semibold mb-6">Add New Agent</h2>

      <form className="space-y-4">
        {/* Agent Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Agent Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter agent name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter agent email"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Phone</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter agent phone number"
          />
        </div>

        {/* Profile Picture */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            className="w-full"
          />
          <div className="mt-2 w-32 h-32 bg-gray-100 rounded-lg border flex items-center justify-center text-gray-400">
            Preview
          </div>
        </div>

        {/* Role */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Role</label>
          <select
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option value="agent">Agent</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-btn text-white font-semibold py-2 px-4 rounded-lg  transition"
        >
          Add Agent
        </button>
      </form>
    </div>
  );
}
