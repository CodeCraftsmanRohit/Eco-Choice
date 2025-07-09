import { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart, Menu, ChevronDown, MapPin, User, X } from "lucide-react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { ecoCart } = useContext(AppContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContext);
  const menuRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDepartmentOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`);
      if (data.success) {
        setUserData(null);
        setIsLoggedin(false);
        toast.success("Logged out successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-blue-600 text-white text-center py-1 px-4 text-sm">
        <p>Free shipping on orders over $50 | Shop sustainable products</p>
      </div>

      {/* Main Navbar */}
      <div className="px-4 py-3 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Hamburger */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="text-gray-700" size={24} />
              ) : (
                <Menu className="text-gray-700" size={24} />
              )}
            </button>
            <Link to="/" className="flex items-center gap-1">
              <motion.span
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="text-blue-600 font-bold text-2xl flex items-center"
              >
                <span className="text-green-600">Eco</span>Mart
              </motion.span>
            </Link>
          </div>

          {/* Departments Dropdown */}
          <div className="hidden md:flex items-center relative" ref={menuRef}>
            <button
              className="flex items-center gap-1 px-4 py-2 font-medium hover:bg-gray-100 rounded transition-colors"
              onClick={() => setDepartmentOpen(!departmentOpen)}
              aria-expanded={departmentOpen}
            >
              <span>Shop</span>
              <motion.div
                animate={{ rotate: departmentOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>

            <AnimatePresence>
              {departmentOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-64 bg-white border rounded-md shadow-lg z-20 mt-1"
                >
                  <Link
                    to="/products"
                    className="block px-4 py-3 hover:bg-gray-50 border-b transition-colors"
                    onClick={() => setDepartmentOpen(false)}
                  >
                    All Products
                  </Link>
                  <Link
                    to="/category/electronics"
                    className="block px-4 py-3 hover:bg-gray-50 border-b transition-colors"
                    onClick={() => setDepartmentOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">♻️</span>
                      <span>Eco Electronics</span>
                    </div>
                  </Link>
                  <Link
                    to="/category/clothing"
                    className="block px-4 py-3 hover:bg-gray-50 border-b transition-colors"
                    onClick={() => setDepartmentOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">👕</span>
                      <span>Sustainable Fashion</span>
                    </div>
                  </Link>
                  <Link
                    to="/category/home"
                    className="block px-4 py-3 hover:bg-gray-50 border-b transition-colors"
                    onClick={() => setDepartmentOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">🏠</span>
                      <span>Green Home</span>
                    </div>
                  </Link>
                  <Link
                    to="/category/grocery"
                    className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setDepartmentOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">🥦</span>
                      <span>Organic Grocery</span>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-4 hidden md:block">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search sustainable products..."
                  className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-4 bg-blue-600 text-white rounded-r-full hover:bg-blue-700 transition-colors"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <Link
              to="/wishlist"
              className="hidden md:block p-2 text-gray-700 hover:text-red-500 transition-colors relative"
              aria-label="Wishlist"
            >
              <Heart size={22} />
            </Link>

            <Link
              to="/cart"
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart size={22} />
              {ecoCart.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {ecoCart.length}
                </motion.span>
              )}
            </Link>

            <div className="relative hidden md:block" ref={profileRef}>
              {userData ? (
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-100 transition-colors"
                  aria-label="Account menu"
                >
                  <User size={20} />
                  <span className="text-sm">Account</span>
                  <motion.div
                    animate={{ rotate: profileOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-100 transition-colors"
                >
                  <User size={20} />
                  <span className="text-sm">Sign In</span>
                </button>
              )}

              <AnimatePresence>
                {profileOpen && userData && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20"
                  >
                    <Link
                      to="/profile"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b transition-colors"
                      onClick={() => setProfileOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/my-orders"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b transition-colors"
                      onClick={() => setProfileOpen(false)}
                    >
                      My Orders
                    </Link>
                    <Link
                      to="/wishlist"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b transition-colors"
                      onClick={() => setProfileOpen(false)}
                    >
                      My Wishlist
                    </Link>
                    <button
                      onClick={() => {
                        setProfileOpen(false);
                        logout();
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search eco-friendly products..."
                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 text-gray-500"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
          </form>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-4 flex flex-col gap-1 border-t pt-3">
                <Link
                  to="/"
                  className="py-3 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="py-3 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  All Products
                </Link>
                <Link
                  to="/category/electronics"
                  className="py-3 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors flex items-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>♻️</span>
                  <span>Electronics</span>
                </Link>
                <Link
                  to="/category/clothing"
                  className="py-3 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors flex items-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>👕</span>
                  <span>Clothing</span>
                </Link>
                <Link
                  to="/category/home"
                  className="py-3 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors flex items-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>🏠</span>
                  <span>Home Goods</span>
                </Link>
                <Link
                  to="/category/grocery"
                  className="py-3 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors flex items-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>🥦</span>
                  <span>Grocery</span>
                </Link>
                <Link
                  to="/brands"
                  className="py-3 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Sustainable Brands
                </Link>
                <Link
                  to="/about"
                  className="py-3 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Our Mission
                </Link>
                <Link
                  to="/wishlist"
                  className="py-3 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  My Wishlist
                </Link>
                <Link
                  to="/cart"
                  className="py-3 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors flex items-center justify-between"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>My Cart</span>
                  {ecoCart.length > 0 && (
                    <span className="bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {ecoCart.length}
                    </span>
                  )}
                </Link>

                {userData ? (
                  <>
                    <Link
                      to="/profile"
                      className="py-3 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/my-orders"
                      className="py-3 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        logout();
                      }}
                      className="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/login");
                    }}
                    className="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  >
                    Sign In / Register
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;