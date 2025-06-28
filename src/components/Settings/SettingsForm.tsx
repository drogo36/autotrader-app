import React, { useState } from 'react';
import { Save, AlertTriangle, Shield, Bell } from 'lucide-react';
import { Settings } from '../../types';

interface SettingsFormProps {
  settings: Settings;
  onSave: (settings: Settings) => void;
}

export default function SettingsForm({ settings, onSave }: SettingsFormProps) {
  const [formData, setFormData] = useState<Settings>(settings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (field: keyof Settings, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* API Configuration */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="w-5 h-5 text-primary-600" />
          <h3 className="text-lg font-semibold text-gray-900">API Configuration</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              API Key
            </label>
            <input
              type="password"
              value={formData.apiKey}
              onChange={(e) => handleChange('apiKey', e.target.value)}
              placeholder="Enter your API key"
              className="input"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Secret Key
            </label>
            <input
              type="password"
              value={formData.secretKey}
              onChange={(e) => handleChange('secretKey', e.target.value)}
              placeholder="Enter your secret key"
              className="input"
            />
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="testnet"
              checked={formData.testnet}
              onChange={(e) => handleChange('testnet', e.target.checked)}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <label htmlFor="testnet" className="text-sm font-medium text-gray-700">
              Use Testnet Environment
            </label>
          </div>
        </div>
      </div>

      {/* Profile Settings */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Settings</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="input"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="input"
            />
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-4">
          <Bell className="w-5 h-5 text-primary-600" />
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-500">Receive general notifications via email</p>
            </div>
            <input
              type="checkbox"
              checked={formData.emailNotifications}
              onChange={(e) => handleChange('emailNotifications', e.target.checked)}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Trade Alerts</p>
              <p className="text-sm text-gray-500">Get notified when trades are executed</p>
            </div>
            <input
              type="checkbox"
              checked={formData.tradeAlerts}
              onChange={(e) => handleChange('tradeAlerts', e.target.checked)}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Profit/Loss Alerts</p>
              <p className="text-sm text-gray-500">Notifications for significant P&L changes</p>
            </div>
            <input
              type="checkbox"
              checked={formData.profitLossAlerts}
              onChange={(e) => handleChange('profitLossAlerts', e.target.checked)}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">System Alerts</p>
              <p className="text-sm text-gray-500">Technical and maintenance notifications</p>
            </div>
            <input
              type="checkbox"
              checked={formData.systemAlerts}
              onChange={(e) => handleChange('systemAlerts', e.target.checked)}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
          </div>
        </div>
      </div>

      {/* Risk Management */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-warning" />
          <h3 className="text-lg font-semibold text-gray-900">Risk Management</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maximum Daily Loss ($)
            </label>
            <input
              type="number"
              value={formData.maxDailyLoss}
              onChange={(e) => handleChange('maxDailyLoss', parseFloat(e.target.value))}
              className="input"
              min="0"
              step="10"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maximum Position Size ($)
            </label>
            <input
              type="number"
              value={formData.maxPositionSize}
              onChange={(e) => handleChange('maxPositionSize', parseFloat(e.target.value))}
              className="input"
              min="0"
              step="100"
            />
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="emergencyStop"
              checked={formData.emergencyStop}
              onChange={(e) => handleChange('emergencyStop', e.target.checked)}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <label htmlFor="emergencyStop" className="text-sm font-medium text-gray-700">
              Enable Emergency Stop (Auto-close all positions on major losses)
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="btn-primary flex items-center space-x-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Settings</span>
        </button>
      </div>
    </form>
  );
}