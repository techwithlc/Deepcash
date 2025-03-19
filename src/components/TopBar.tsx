import React from 'react';
import { Bell, Moon, Sun, User } from 'lucide-react';

export function TopBar() {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="h-16 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 flex items-center justify-between">
      <div className="flex-1" />
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          <User className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}