import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Receipt, 
  TrendingUp, 
  Settings,
  Wallet
} from 'lucide-react';
import { cn } from '../lib/utils';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Transactions', icon: Receipt, href: '/transactions' },
  { name: 'Investments', icon: TrendingUp, href: '/investments' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
        <Wallet className="w-8 h-8 text-blue-600" />
        <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">DeepCash</span>
      </div>
      <nav className="p-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex items-center px-4 py-2 text-sm font-medium rounded-lg',
                isActive
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-200'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              )
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}