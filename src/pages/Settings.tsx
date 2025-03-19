import React from 'react';

export function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Settings
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <p className="text-gray-600 dark:text-gray-400">
          Account settings and preferences will be displayed here.
        </p>
      </div>
    </div>
  );
}