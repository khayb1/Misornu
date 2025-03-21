import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-700">404</h1>
        <div className="mt-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <NavLink
            to="/"
            className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Go Back Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 