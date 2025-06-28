import React, { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { clsx } from 'clsx';

export default function OrderForm() {
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [orderMode, setOrderMode] = useState<'market' | 'limit'>('market');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission
    console.log('Order submitted:', { orderType, symbol, quantity, price, orderMode });
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Place Order</h3>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setOrderType('buy')}
            className={clsx(
              'px-4 py-2 rounded-md text-sm font-medium transition-all',
              orderType === 'buy'
                ? 'bg-green-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            )}
          >
            <TrendingUp className="w-4 h-4 inline mr-1" />
            Buy
          </button>
          <button
            onClick={() => setOrderType('sell')}
            className={clsx(
              'px-4 py-2 rounded-md text-sm font-medium transition-all',
              orderType === 'sell'
                ? 'bg-red-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            )}
          >
            <TrendingDown className="w-4 h-4 inline mr-1" />
            Sell
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Trading Pair
          </label>
          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="input"
          >
            <option value="BTCUSDT">BTC/USDT</option>
            <option value="ETHUSDT">ETH/USDT</option>
            <option value="ADAUSDT">ADA/USDT</option>
            <option value="SOLUSDT">SOL/USDT</option>
          </select>
        </div>

        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => setOrderMode('market')}
            className={clsx(
              'flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all',
              orderMode === 'market'
                ? 'bg-primary-100 text-primary-700 border border-primary-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            )}
          >
            Market
          </button>
          <button
            type="button"
            onClick={() => setOrderMode('limit')}
            className={clsx(
              'flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all',
              orderMode === 'limit'
                ? 'bg-primary-100 text-primary-700 border border-primary-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            )}
          >
            Limit
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="0.00"
            className="input"
            step="0.00001"
          />
        </div>

        {orderMode === 'limit' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              className="input"
              step="0.01"
            />
          </div>
        )}

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Available Balance:</span>
            <span className="font-medium">$5,250.00</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-600">Estimated Total:</span>
            <span className="font-medium">
              {quantity && (orderMode === 'market' ? '~' : '')}
              ${(parseFloat(quantity || '0') * parseFloat(price || '44500')).toFixed(2)}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className={clsx(
            'w-full py-3 rounded-lg font-medium transition-all',
            orderType === 'buy'
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-red-500 hover:bg-red-600 text-white'
          )}
        >
          {orderType === 'buy' ? 'Place Buy Order' : 'Place Sell Order'}
        </button>
      </form>
    </div>
  );
}