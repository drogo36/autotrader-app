import React from 'react';
import { TrendingUp, TrendingDown, X } from 'lucide-react';
import { mockPositions } from '../../data/mockData';
import { clsx } from 'clsx';

export default function PositionsList() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Open Positions</h3>
        <span className="text-sm text-gray-500">{mockPositions.length} positions</span>
      </div>

      <div className="space-y-4">
        {mockPositions.map((position) => (
          <div key={position.symbol} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-700">
                    {position.symbol.slice(0, 3)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{position.symbol}</p>
                  <p className="text-sm text-gray-500">
                    {position.quantity > 0 ? 'Long' : 'Short'} {Math.abs(position.quantity)}
                  </p>
                </div>
              </div>
              
              <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Avg Price</p>
                <p className="font-medium">${position.avgPrice.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-gray-600">Current Price</p>
                <p className="font-medium">${position.currentPrice.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-gray-600">P&L</p>
                <div className={clsx(
                  'flex items-center space-x-1 font-medium',
                  position.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                )}>
                  {position.pnl >= 0 ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  <span>${Math.abs(position.pnl).toFixed(2)}</span>
                </div>
              </div>
              <div>
                <p className="text-gray-600">P&L %</p>
                <p className={clsx(
                  'font-medium',
                  position.pnlPercent >= 0 ? 'text-green-600' : 'text-red-600'
                )}>
                  {position.pnlPercent >= 0 ? '+' : ''}{position.pnlPercent.toFixed(2)}%
                </p>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="flex-1 py-2 px-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors">
                Close Position
              </button>
              <button className="flex-1 py-2 px-3 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                Modify
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}