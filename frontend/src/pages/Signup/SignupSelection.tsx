// pages/SignupSelection.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar";

const SignupSelection = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col">
        <div className="flex-grow container mx-auto px-4 py-8 max-w-2xl flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Create an Account
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <NavLink
              to="/signup/farmer"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-200 hover:border-green-400 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Farmer Account</h2>
              <p className="text-gray-600">Sell your farm products directly to consumers</p>
              <span className="mt-4 inline-block px-4 py-2 bg-green-100 text-green-800 rounded-lg font-medium">
                Sign up as Farmer
              </span>
            </NavLink>
            
            <NavLink
              to="/signup/consumer"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-200 hover:border-blue-400 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Consumer Account</h2>
              <p className="text-gray-600">Buy fresh products directly from local farmers</p>
              <span className="mt-4 inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium">
                Sign up as Consumer
              </span>
            </NavLink>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Log in
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupSelection;