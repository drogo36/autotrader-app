export interface User {
  name: string;
  email: string;
}

export interface Settings {
  apiKey: string;
  secretKey: string;
  testnet: boolean;
  name: string;
  email: string;
  emailNotifications: boolean;
  tradeAlerts: boolean;
  profitLossAlerts: boolean;
  systemAlerts: boolean;
  maxDailyLoss: number;
  maxPositionSize: number;
  emergencyStop: boolean;
}

export interface Trade {
  id: string;
  symbol: string;
  side: 'buy' | 'sell';
  quantity: number;
  price: number;
  timestamp: Date;
  status: 'pending' | 'filled' | 'cancelled';
  pnl?: number;
}

export interface Position {
  symbol: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  pnl: number;
  pnlPercent: number;
}

export interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  high24h: number;
  low24h: number;
}