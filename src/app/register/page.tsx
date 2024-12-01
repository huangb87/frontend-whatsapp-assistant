import React from 'react';

const RegisterPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">User Registration</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
