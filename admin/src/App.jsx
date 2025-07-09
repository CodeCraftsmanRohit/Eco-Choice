import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserOrders from "./pages/UserOrders";
import Forecasts from "./pages/Forecasts";
import Dashboard from "./pages/Dashboard";
import PurchaseSuggestions from "./pages/PurchaseSuggestions";
import Notifications from "./pages/Notifications";
import Sustainability from "./pages/Sustainability";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <Navbar />
        <main className="pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/admin/user-orders/:userId" element={<UserOrders />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin/forecasts" element={<Forecasts />} />
            <Route path="/purchase-suggestions" element={<PurchaseSuggestions />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/sustainability" element={<Sustainability />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;