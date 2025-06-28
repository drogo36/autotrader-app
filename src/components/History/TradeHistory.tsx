import React from 'react';
import { TrendingUp, TrendingDown, Clock, CheckCircle, XCircle } from 'lucide-react';
import { mockTrades } from '../../data/mockData';
import { clsx } from 'clsx';

export default function TradeHistory() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'filled':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Trades</h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-lg">All</button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">Filled</button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">Pending</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-600">Symbol</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Side</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Quantity</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">P&L</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Time</th>
            </tr>
          </thead>
          <tbody>
            {mockTrades.map((trade) => (
              <tr key={trade.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-700">
                        {trade.symbol.slice(0, 2)}
                      </span>
                    </div>
                    <span className="font-medium">{trade.symbol}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className={clsx(
                    'flex items-center space-x-1',
                    trade.side === 'buy' ? 'text-green-600' : 'text-red-600'
                  )}>
                    {trade.side === 'buy' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="font-medium capitalize">{trade.side}</span>
                  </div>
                </td>
                <td className="py-3 px-4 font-medium">{trade.quantity}</td>
                <td className="py-3 px-4 font-medium">${trade.price.toLocaleString()}</td>
                <td className="py-3 px-4">
                  {trade.pnl !== undefined ? (
                    <span className={clsx(
                      'font-medium',
                      trade.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                    )}>
                      {trade.pnl >= 0 ? '+' : ''}${trade.pnl.toFixed(2)}
                    </span>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(trade.status)}
                    <span className={clsx(
                      'text-sm font-medium capitalize',
                      trade.status === 'filled' && 'text-green-600',
                      trade.status === 'pending' && 'text-yellow-600',
                      trade.status === 'cancelled' && 'text-red-600'
                    )}>
                      {trade.status}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-500">
                  {trade.timestamp.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}