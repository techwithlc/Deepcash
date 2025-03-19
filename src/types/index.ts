export type User = {
  id: string;
  email: string;
  name: string;
  created_at: string;
};

export type Transaction = {
  id: string;
  user_id: string;
  amount: number;
  currency: string;
  category: string;
  description: string;
  date: string;
  type: 'expense' | 'income';
};

export type Category = {
  id: string;
  name: string;
  color: string;
  icon: string;
};

export type Budget = {
  id: string;
  user_id: string;
  category_id: string;
  amount: number;
  period: 'monthly' | 'yearly';
  start_date: string;
  end_date: string;
};

export type Investment = {
  id: string;
  user_id: string;
  type: string;
  amount: number;
  currency: string;
  date: string;
  performance: number;
  risk_level: 'low' | 'medium' | 'high';
};