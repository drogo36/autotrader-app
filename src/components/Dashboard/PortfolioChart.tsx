import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { portfolioChartData } from '../../data/mockData';

export default function PortfolioChart() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Portfolio Performance</h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-lg">1D</button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">7D</button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">1M</button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">3M</button>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={portfolioChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              stroke="#6b7280"
              fontSize={12}
              tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            />
            <YAxis 
              stroke="#6b7280"
              fontSize={12}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
              labelFormatter={(label) => new Date(label).toLocaleDateString()}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#0d9488" 
              strokeWidth={2}
              dot={{ fill: '#0d9488', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#0d9488', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}