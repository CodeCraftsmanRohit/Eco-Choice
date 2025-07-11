import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  AreaChart,
  Area
} from "recharts";
import { FiTrendingUp, FiPackage, FiAlertTriangle, FiPercent } from "react-icons/fi";

const Dashboard = () => {
  const [forecastData, setForecastData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [activeTab, setActiveTab] = useState("forecast");
  const [inputSubmitted, setInputSubmitted] = useState(false);
  const [salesRange, setSalesRange] = useState("");
  const [weatherSource, setWeatherSource] = useState("");
  const [holidaySource, setHolidaySource] = useState("");

  const handleGenerateClick = () => {
    if (salesRange && weatherSource && holidaySource) {
      setInputSubmitted(true);
    } else {
      alert("Please select all input sources.");
    }
  };

  const mockBarData = [
    { productName: "Organic Milk", currentStock: 80, predictedDemand: 120, category: "Dairy", profitMargin: 22 },
    { productName: "Whole Grain Bread", currentStock: 150, predictedDemand: 130, category: "Bakery", profitMargin: 18 },
    { productName: "Free-Range Eggs", currentStock: 60, predictedDemand: 100, category: "Dairy", profitMargin: 25 },
    { productName: "Organic Apples", currentStock: 70, predictedDemand: 90, category: "Produce", profitMargin: 15 },
    { productName: "Greek Yogurt", currentStock: 50, predictedDemand: 95, category: "Dairy", profitMargin: 20 },
  ];

  useEffect(() => {
    const dummyForecast = [
      { ds: "Mon", yhat: 120 },
      { ds: "Tue", yhat: 132 },
      { ds: "Wed", yhat: 110 },
      { ds: "Thu", yhat: 145 },
      { ds: "Fri", yhat: 160 },
      { ds: "Sat", yhat: 140 },
      { ds: "Sun", yhat: 155 },
    ];
    setForecastData(dummyForecast);
    setBarData(mockBarData);
  }, []);

  const stats = [
    {
      label: "Total Products",
      value: 128,
      icon: <FiPackage className="text-blue-500" size={24} />,
      change: "+12%",
      trend: "up"
    },
    {
      label: "High Demand",
      value: 37,
      icon: <FiTrendingUp className="text-green-500" size={24} />,
      change: "+5%",
      trend: "up"
    },
    {
      label: "Overstock Alert",
      value: 12,
      icon: <FiAlertTriangle className="text-yellow-500" size={24} />,
      change: "-3%",
      trend: "down"
    },
    {
      label: "Forecast Accuracy",
      value: "93.8%",
      icon: <FiPercent className="text-purple-500" size={24} />,
      change: "+2.5%",
      trend: "up"
    },
  ];

  const calculateReorderSuggestions = () => {
    return barData.map(product => {
      const reorderQty = product.predictedDemand > product.currentStock
        ? product.predictedDemand - product.currentStock
        : 0;
      const status = reorderQty > 0
        ? (reorderQty > 50 ? "critical" : "warning")
        : "good";
      return { ...product, reorderQty, status };
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Inventory Forecast Dashboard</h1>
            <p className="text-gray-600 mt-2">AI-powered demand predictions and stock management</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Live Data</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">AI Active</span>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Input Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Sales Range</label>
              <select
                value={salesRange}
                onChange={(e) => setSalesRange(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="7">Past 7 days</option>
                <option value="14">Past 14 days</option>
                <option value="30">Past 30 days</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Weather Source</label>
              <select
                value={weatherSource}
                onChange={(e) => setWeatherSource(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="accuweather">AccuWeather</option>
                <option value="openweather">OpenWeather</option>
                <option value="none">No Input</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Holiday Calendar</label>
              <select
                value={holidaySource}
                onChange={(e) => setHolidaySource(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="india">India Calendar</option>
                <option value="global">Global Calendar</option>
                <option value="none">No Holiday Input</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleGenerateClick}
            className="mt-6 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
          >
            Generate
          </button>
        </div>

        {/* KPI Cards */}
        {inputSubmitted && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                    <p className="mt-2 text-3xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-opacity-20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className={`mt-4 text-sm flex items-center ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                  <svg
                    className={`w-4 h-4 ml-1 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={stat.trend === 'up' ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("forecast")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "forecast"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Demand Forecast
            </button>
            <button
              onClick={() => setActiveTab("inventory")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "inventory"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Inventory Analysis
            </button>
            <button
              onClick={() => setActiveTab("suggestions")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "suggestions"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Reorder Suggestions
            </button>
          </nav>
        </div>

        {/* Content based on active tab */}
        {activeTab === "forecast" && (
          <div className="space-y-6">
            {/* Time Series Forecast */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Weekly Demand Forecast</h2>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx={4} cy={4} r={3} />
                    </svg>
                    AI Prediction
                  </span>
                  <select className="border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500">
                    <option>Last 7 days</option>
                    <option>Last 14 days</option>
                    <option>Last 30 days</option>
                  </select>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={forecastData}>
                    <defs>
                      <linearGradient id="colorYhat" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis
                      dataKey="ds"
                      tick={{ fill: '#6b7280' }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      tick={{ fill: '#6b7280' }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        borderColor: '#e5e7eb',
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        padding: '12px'
                      }}
                      itemStyle={{ color: '#10b981' }}
                      labelStyle={{ fontWeight: 'bold', color: '#1f2937' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="yhat"
                      stroke="#10b981"
                      fillOpacity={1}
                      fill="url(#colorYhat)"
                      strokeWidth={2}
                      activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Product Forecast */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Product Demand vs Inventory</h2>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Predicted</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Current</span>
                  </div>
                </div>
              </div>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis
                      dataKey="productName"
                      tick={{ fill: '#6b7280' }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      tick={{ fill: '#6b7280' }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        borderColor: '#e5e7eb',
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        padding: '12px'
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="predictedDemand"
                      name="Predicted Demand"
                      fill="#10b981"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="currentStock"
                      name="Current Stock"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === "inventory" && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Inventory Health Analysis</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Current Stock
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Predicted Demand
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Profit Margin
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {barData.map((product, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            {product.productName.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{product.productName}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.currentStock}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.predictedDemand}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.profitMargin}%</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          product.predictedDemand > product.currentStock
                            ? 'bg-red-100 text-red-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {product.predictedDemand > product.currentStock ? 'Understock' : 'Healthy'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "suggestions" && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">AI Reorder Suggestions</h2>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Generate Purchase Orders
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Current
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Predicted
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Suggested Order
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priority
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {calculateReorderSuggestions().map((product, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            {product.productName.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{product.productName}</div>
                            <div className="text-sm text-gray-500">{product.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.currentStock}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.predictedDemand}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-medium ${
                          product.reorderQty > 0 ? 'text-blue-600' : 'text-gray-500'
                        }`}>
                          {product.reorderQty > 0 ? product.reorderQty : 'No action'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {product.status === 'critical' ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Critical
                          </span>
                        ) : product.status === 'warning' ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Warning
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Good
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {product.reorderQty > 0 ? (
                          <button className="text-blue-600 hover:text-blue-900">Order Now</button>
                        ) : (
                          <span className="text-gray-400">No action needed</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;