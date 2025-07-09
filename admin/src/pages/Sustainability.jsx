import React from "react";

const Sustainability = () => {
 // ... (keep all the imports and logic the same)

return (
  <div className="p-6 max-w-6xl mx-auto">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span className="p-3 bg-green-100 text-green-600 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </span>
          Sustainability Impact
        </h1>
        <p className="text-gray-600 mt-2">Track your environmental savings from optimized inventory</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
          Live Metrics
        </span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="card p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-green-100 text-green-600 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Waste Reduced</h2>
            </div>
            <p className="text-4xl font-bold text-green-600">324 kg</p>
            <p className="text-gray-500 mt-1">in the past 30 days</p>
          </div>
          <div className="h-24 w-24">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3"/>
              <path className="circle" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round"/>
              <text x="18" y="20.5" className="percentage" fill="#10b981" fontSize="8" textAnchor="middle" dy=".3em">75%</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="card p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Carbon Saved</h2>
            </div>
            <p className="text-4xl font-bold text-blue-600">1.2 tons CO₂</p>
            <p className="text-gray-500 mt-1">based on optimized inventory</p>
          </div>
          <div className="h-24 w-24">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3"/>
              <path className="circle" strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
              <text x="18" y="20.5" className="percentage" fill="#3b82f6" fontSize="8" textAnchor="middle" dy=".3em">60%</text>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div className="card p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Environmental Impact Breakdown</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-100 text-green-600 rounded-full">
              <svg className="w-5 h-5" fill="
              none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="font-medium text-gray-800">Food Waste</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">-42%</p>
          <p className="text-sm text-gray-500 mt-1">Reduction in perishable waste</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
              </svg>
            </div>
            <h3 className="font-medium text-gray-800">Transport Emissions</h3>
          </div>
          <p className="text-2xl font-bold text-blue-600">-28%</p>
          <p className="text-sm text-gray-500 mt-1">Fewer deliveries needed</p>
        </div>

        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-100 text-purple-600 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h3 className="font-medium text-gray-800">Packaging Waste</h3>
          </div>
          <p className="text-2xl font-bold text-purple-600">-35%</p>
          <p className="text-sm text-gray-500 mt-1">Less excess packaging</p>
        </div>
      </div>
    </div>
  </div>
);
};

export default Sustainability;
