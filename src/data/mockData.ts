import { Trade, Position, MarketData } from '../types';

export const mockTrades: Trade[] = [
  {
    id: '1',
    symbol: 'BTCUSDT',
    side: 'buy',
    quantity: 0.5,
    price: 43250.00,
    timestamp: new Date('2024-01-15T10:30:00'),
    status: 'filled',
    pnl: 1250.50
  },
  {
    id: '2',
    symbol: 'ETHUSDT',
    side: 'sell',
    quantity: 2.0,
    price: 2580.75,
    timestamp: new Date('2024-01-15T11:45:00'),
    status: 'filled',
    pnl: -125.30
  },
  {
    id: '3',
    symbol: 'ADAUSDT',
    side: 'buy',
    quantity: 1000,
    price: 0.485,
    timestamp: new Date('2024-01-15T14:20:00'),
    status: 'pending'
  }
];

export const mockPositions: Position[] = [
  {
    symbol: 'BTCUSDT',
    quantity: 0.5,
    avgPrice: 43250.00,
    currentPrice: 44500.00,
    pnl: 625.00,
    pnlPercent: 2.89
  },
  {
    symbol: 'ETHUSDT',
    quantity: -2.0,
    avgPrice: 2580.75,
    currentPrice: 2520.30,
    pnl: 120.90,
    pnlPercent: 2.34
  },
  {
    symbol: 'ADAUSDT',
    quantity: 1000,
    avgPrice: 0.485,
    currentPrice: 0.492,
    pnl: 7.00,
    pnlPercent: 1.44
  }
];

export const mockMarketData: MarketData[] = [
  {
    symbol: 'BTCUSDT',
    price: 44500.00,
    change: 1250.00,
    changePercent: 2.89,
    volume: 28450.75,
    high24h: 45200.00,
    low24h: 42800.00
  },
  {
    symbol: 'ETHUSDT',
    price: 2520.30,
    change: -60.45,
    changePercent: -2.34,
    volume: 145230.50,
    high24h: 2650.80,
    low24h: 2480.20
  },
  {
    symbol: 'ADAUSDT',
    price: 0.492,
    change: 0.007,
    changePercent: 1.44,
    volume: 2850000,
    high24h: 0.498,
    low24h: 0.478
  },
  {
    symbol: 'SOLUSDT',
    price: 98.75,
    change: 4.25,
    changePercent: 4.50,
    volume: 85420.30,
    high24h: 102.50,
    low24h: 92.80
  }
];

export const portfolioChartData = [
  { date: '2024-01-01', value: 10000 },
  { date: '2024-01-02', value: 10250 },
  { date: '2024-01-03', value: 9980 },
  { date: '2024-01-04', value: 10450 },
  { date: '2024-01-05', value: 10320 },
  { date: '2024-01-06', value: 10680 },
  { date: '2024-01-07', value: 10520 },
  { date: '2024-01-08', value: 10890 },
  { date: '2024-01-09', value: 10750 },
  { date: '2024-01-10', value: 11120 },
  { date: '2024-01-11', value: 10980 },
  { date: '2024-01-12', value: 11350 },
  { date: '2024-01-13', value: 11180 },
  { date: '2024-01-14', value: 11520 },
  { date: '2024-01-15', value: 11750 }
];