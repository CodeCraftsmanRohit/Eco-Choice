import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const statusOptions = ["Processing", "Shipped", "Out for Delivery", "Delivered"];

const UserOrders = () => {
  const { userId } = useParams();
  const [orders, setOrders] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/orders/user/${userId}`);
      if (data.success) setOrders(data.orders);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch user orders");
    }
  };

  const updateStatus = async (orderId, newStatus) => {
    try {
      const { data } = await axios.patch(`${backendUrl}/api/orders/update-status/${orderId}`, { status: newStatus });
      if (data.success) {
        toast.success("Status updated");
        fetchOrders(); // Refresh after update
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [userId]);

 // ... (keep all the imports and logic the same)

return (
  <div className="p-6 max-w-6xl mx-auto">
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-gray-800">User Orders Management</h1>
      <div className="flex items-center gap-2">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
          User ID: {userId}
        </span>
      </div>
    </div>

    {orders.length > 0 ? (
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order._id} className="card p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Order #{order._id.substring(0, 8)}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>

                <div className="ml-11 space-y-1">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Items:</span> {order.items.map(i => `${i.name} (x${i.quantity})`).join(", ")}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Total:</span> ${order.totalAmount.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="md:text-right">
                <label className="block text-sm font-medium text-gray-700 mb-1">Order Status</label>
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(order._id, e.target.value)}
                  className="input bg-white"
                >
                  {statusOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="card p-8 text-center">
        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">No orders found</h3>
        <p className="text-gray-500">This user hasn't placed any orders yet.</p>
      </div>
    )}
  </div>
);
};

export default UserOrders;
