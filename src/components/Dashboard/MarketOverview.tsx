import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { mockMarketData } from '../../data/mockData';
import { clsx } from 'clsx';

export default function MarketOverview() {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Overview</h3>
      
      <div className="space-y-4">
        {mockMarketData.map((market) => (
          <div key={market.symbol} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary-700">
                  {market.symbol.slice(0, 3)}
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{market.symbol}</p>
                <p className="text-sm text-gray-500">Vol: {market.volume.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="font-semibold text-gray-900">
                ${market.price.toLocaleString()}
              </p>
              <div className={clsx(
                'flex items-center space-x-1 text-sm',
                market.changePercent >= 0 ? 'text-green-600' : 'text-red-600'
              )}>
                {market.changePercent >= 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span>{Math.abs(market.changePercent).toFixed(2)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}