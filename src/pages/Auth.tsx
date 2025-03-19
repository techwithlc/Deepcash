import React from 'react';

export function Auth() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 bg-white dark:bg-gray-800 py-8 px-4 shadow-sm rounded-lg sm:px-10">
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Authentication form will be implemented here.
          </p>
        </div>
      </div>
    </div>
  );
}