import React from 'react';
import { 
  ArrowDownRight, 
  ArrowUpRight, 
  DollarSign, 
  TrendingUp,
  AlertTriangle 
} from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { formatCurrency, cn } from '../lib/utils';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function Dashboard() {
  const [stats, setStats] = React.useState([
    {
      title: 'Total Balance',
      value: 24500,
      change: 12.5,
      trend: 'up',
      icon: DollarSign,
    },
    {
      title: 'Monthly Expenses',
      value: 3200,
      change: -4.3,
      trend: 'down',
      icon: ArrowDownRight,
    },
    {
      title: 'Monthly Income',
      value: 5600,
      change: 8.2,
      trend: 'up',
      icon: ArrowUpRight,
    },
    {
      title: 'Investments',
      value: 18700,
      change: 15.3,
      trend: 'up',
      icon: TrendingUp,
    },
  ]);

  const [recentTransactions, setRecentTransactions] = React.useState([
    { id: 1, description: 'Salary Deposit', amount: 5000, type: 'income', date: '2024-03-15' },
    { id: 2, description: 'Rent Payment', amount: -1500, type: 'expense', date: '2024-03-14' },
    { id: 3, description: 'Grocery Shopping', amount: -200, type: 'expense', date: '2024-03-13' },
    { id: 4, description: 'Freelance Work', amount: 800, type: 'income', date: '2024-03-12' },
    { id: 5, description: 'Utility Bills', amount: -150, type: 'expense', date: '2024-03-11' },
  ]);

  const [alerts, setAlerts] = React.useState([
    { id: 1, message: 'Unusual spending detected in Shopping category', severity: 'warning' },
    { id: 2, message: 'Monthly savings goal achieved', severity: 'success' },
  ]);

  // Spending data for the chart
  const spendingData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [4500, 5200, 5000, 5600, 5400, 6000],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Expenses',
        data: [3200, 3800, 3400, 3200, 3600, 3500],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(156, 163, 175, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  // Simulate real-time updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      // Update stats with random fluctuations
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          value: stat.value + (Math.random() - 0.5) * 100,
          change: stat.change + (Math.random() - 0.5) * 0.5,
        }))
      );

      // Add new random transaction occasionally
      if (Math.random() > 0.7) {
        const newTransaction = {
          id: Date.now(),
          description: 'New Transaction',
          amount: Math.random() > 0.5 ? 100 : -100,
          type: Math.random() > 0.5 ? 'income' : 'expense',
          date: new Date().toISOString().split('T')[0],
        };
        setRecentTransactions(prev => [newTransaction, ...prev.slice(0, 4)]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
                  {formatCurrency(stat.value)}
                </p>
              </div>
              <div className={cn(
                'p-3 rounded-full',
                stat.trend === 'up' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' : 
                'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300'
              )}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className={cn(
                'text-sm font-medium',
                stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              )}>
                {stat.change.toFixed(1)}%
              </span>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
            Income vs Expenses
          </h3>
          <div className="h-[300px]">
            <Line options={chartOptions} data={spendingData} />
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Recent Transactions
          </h3>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {transaction.date}
                  </p>
                </div>
                <span className={cn(
                  'font-semibold',
                  transaction.type === 'income' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                )}>
                  {transaction.type === 'income' ? '+' : '-'}
                  {formatCurrency(Math.abs(transaction.amount))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {alerts.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Alerts & Notifications
          </h3>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={cn(
                  'flex items-center p-4 rounded-lg',
                  alert.severity === 'warning' 
                    ? 'bg-yellow-50 dark:bg-yellow-900/30' 
                    : 'bg-green-50 dark:bg-green-900/30'
                )}
              >
                <AlertTriangle className={cn(
                  'w-5 h-5 mr-3',
                  alert.severity === 'warning'
                    ? 'text-yellow-600 dark:text-yellow-400'
                    : 'text-green-600 dark:text-green-400'
                )} />
                <span className={cn(
                  'text-sm font-medium',
                  alert.severity === 'warning'
                    ? 'text-yellow-800 dark:text-yellow-200'
                    : 'text-green-800 dark:text-green-200'
                )}>
                  {alert.message}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}