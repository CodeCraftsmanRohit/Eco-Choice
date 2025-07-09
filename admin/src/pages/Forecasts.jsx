import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const mockData = [
  {
    productName: "Milk",
    currentStock: 80,
    predictedDemand: 120,
  },
  {
    productName: "Bread",
    currentStock: 150,
    predictedDemand: 130,
  },
  {
    productName: "Eggs",
    currentStock: 60,
    predictedDemand: 100,
  },
  {
    productName: "Apples",
    currentStock: 70,
    predictedDemand: 90,
  },
  {
    productName: "Yogurt",
    currentStock: 50,
    predictedDemand: 95,
  },
];

const Forecasts = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">AI Demand Forecast</h1>

      {/* Chart Section */}
      <div className="bg-white p-4 rounded shadow mb-10 border">
        <h2 className="text-lg font-semibold mb-4">Graphical Forecast</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="productName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="predictedDemand" fill="#10b981" name="Predicted Demand" />
            <Bar dataKey="currentStock" fill="#3b82f6" name="Current Stock" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table Section */}
      <div className="bg-white p-4 rounded shadow border">
        <h2 className="text-lg font-semibold mb-4">Detailed Forecast Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left border">Product</th>
                <th className="px-4 py-2 text-left border">Current Stock</th>
                <th className="px-4 py-2 text-left border">Predicted Demand</th>
                <th className="px-4 py-2 text-left border">Reorder Suggestion</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((product, i) => {
                const reorderQty =
                  product.predictedDemand > product.currentStock
                    ? product.predictedDemand - product.currentStock
                    : 0;
                return (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2 border">{product.productName}</td>
                    <td className="px-4 py-2 border">{product.currentStock}</td>
                    <td className="px-4 py-2 border">{product.predictedDemand}</td>
                    <td className="px-4 py-2 border text-green-600 font-semibold">
                      {reorderQty > 0 ? `Reorder ${reorderQty}` : "No action"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Forecasts;
