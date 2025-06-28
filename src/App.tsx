import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import StatsCard from './components/Dashboard/StatsCard';
import PortfolioChart from './components/Dashboard/PortfolioChart';
import MarketOverview from './components/Dashboard/MarketOverview';
import OrderForm from './components/Trading/OrderForm';
import PositionsList from './components/Trading/PositionsList';
import SettingsForm from './components/Settings/SettingsForm';
import TradeHistory from './components/History/TradeHistory';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Settings } from './types';
import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  Activity,
  Bell,
  AlertTriangle
} from 'lucide-react';

// Default settings from the data export
const defaultSettings: Settings = {
  apiKey: "",
  secretKey: "",
  testnet: true,
  name: "Demo User",
  email: "demo@autotrader.com",
  emailNotifications: true,
  tradeAlerts: true,
  profitLossAlerts: true,
  systemAlerts: false,
  maxDailyLoss: 500,
  maxPositionSize: 1000,
  emergencyStop: true
};

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [settings, setSettings] = useLocalStorage<Settings>('autotrader-settings', defaultSettings);

  const getTabTitle = (tab: string) => {
    switch (tab) {
      case 'dashboard': return 'Dashboard';
      case 'trading': return 'Trading';
      case 'portfolio': return 'Portfolio';
      case 'history': return 'Trade History';
      case 'alerts': return 'Alerts';
      case 'settings': return 'Settings';
      default: return 'Dashboard';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Portfolio Value"
                value="$11,750.00"
                change="+$1,750.00 (17.5%)"
                changeType="positive"
                icon={DollarSign}
              />
              <StatsCard
                title="Today's P&L"
                value="+$245.30"
                change="+2.13%"
                changeType="positive"
                icon={TrendingUp}
              />
              <StatsCard
                title="Open Positions"
                value="3"
                change="2 profitable"
                changeType="positive"
                icon={Target}
              />
              <StatsCard
                title="Win Rate"
                value="68.5%"
                change="Last 30 days"
                changeType="neutral"
                icon={Activity}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <PortfolioChart />
              </div>
              <div>
                <MarketOverview />
              </div>
            </div>
          </div>
        );

      case 'trading':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <OrderForm />
            <PositionsList />
          </div>
        );

      case 'portfolio':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatsCard
                title="Total Balance"
                value="$11,750.00"
                change="+17.5% this month"
                changeType="positive"
                icon={DollarSign}
              />
              <StatsCard
                title="Available Balance"
                value="$5,250.00"
                change="44.7% of total"
                changeType="neutral"
                icon={DollarSign}
              />
              <StatsCard
                title="Margin Used"
                value="$6,500.00"
                change="55.3% of total"
                changeType="neutral"
                icon={Target}
              />
            </div>
            <PortfolioChart />
            <PositionsList />
          </div>
        );

      case 'history':
        return <TradeHistory />;

      case 'alerts':
        return (
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center space-x-2 mb-4">
                <Bell className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">Recent Alerts</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900">Position Closed Profitably</p>
                    <p className="text-sm text-green-700">BTCUSDT position closed with +$625.00 profit</p>
                    <p className="text-xs text-green-600 mt-1">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-900">Risk Limit Warning</p>
                    <p className="text-sm text-yellow-700">Daily loss approaching 80% of maximum limit</p>
                    <p className="text-xs text-yellow-600 mt-1">5 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                  <Activity className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900">Trade Executed</p>
                    <p className="text-sm text-blue-700">Buy order for 1000 ADA filled at $0.485</p>
                    <p className="text-xs text-blue-600 mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <SettingsForm
            settings={settings}
            onSave={(newSettings) => {
              setSettings(newSettings);
              // Show success message
              alert('Settings saved successfully!');
            }}
          />
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title={getTabTitle(activeTab)} />
          
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;