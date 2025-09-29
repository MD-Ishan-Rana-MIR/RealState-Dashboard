import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AdminLoginPage() {
    const navigation = useNavigate()
    const handleSubmit  = ()=>{
        navigation("/admin-dashboard")

    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold text-indigo-600">
            <img src="/src/assets/images/logos/logo.svg" alt="" srcset="" />
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Let’s get you signed in
        </h2>

        {/* Social Login Buttons */}
        {/* <div className="flex gap-4 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-50">
            <FaFacebook className="text-blue-600" />
            <span>Sign in with Facebook</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-50">
            <FaGoogle className="text-red-500" />
            <span>Sign in with Google</span>
          </button>
        </div> */}

        {/* Divider */}
        <div className="flex items-center gap-2 mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-500">Sign in with email</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <a href="#" className="text-sm text-indigo-500 hover:underline">
              Forgot Password ?
            </a>
          </div>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Keep me logged in */}
        <div className="flex items-center mb-6">
          <input
            id="remember"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
            Keep me logged in
          </label>
        </div>

        {/* Sign In Button */}
        <button onClick={handleSubmit}  className="w-full bg-btn text-white py-3 rounded-lg  transition">
          Sign in
        </button>
        {/* <div>
            <h1>Don’t have an account yet?Sign Up Now</h1>
        </div> */}
      </div>


    </div>
  );
}
