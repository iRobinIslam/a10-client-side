import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Blurred Elements */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full opacity-30 blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-30 blur-3xl bottom-10 right-10"></div>

      {/* Glassmorphism Container */}
      <div className="relative flex flex-col items-center justify-center text-white p-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg">
        <h1 className="text-9xl font-bold text-white/70 drop-shadow-lg">404</h1>
        <p className="text-lg text-gray-300 mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
