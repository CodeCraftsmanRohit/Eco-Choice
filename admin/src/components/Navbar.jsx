import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, User, ChevronDown } from "lucide-react";
import { AdminContext } from "../context/AdminContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAdminAuthenticated, logout } = useContext(AdminContext);
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


return (
  <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="px-4 py-3 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Toggle */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="text-gray-700" size={24} />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Eco-Admin
            </span>
          </Link>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { path: "/dashboard", name: "Dashboard", icon: "LayoutDashboard" },
            { path: "/users", name: "Users", icon: "Users" },
            { path: "/add-product", name: "Products", icon: "Package" },
            { path: "/notifications", name: "Alerts", icon: "Bell" },
            { path: "/sustainability", name: "Sustainability", icon: "Leaf" },
            { path: "/purchase-suggestions", name: "Suggestions", icon: "Lightbulb" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-100 text-gray-700 hover:text-indigo-600"
            >
              <span className="text-current">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Right Profile / Login / Signup */}
        <div className="hidden md:flex items-center gap-4">
          {isAdminAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <User size={18} />
                </div>
                <ChevronDown size={16} className={`transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setProfileOpen(false);
                        logout();
                        navigate("/login");
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                      </svg>
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Sign in
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { path: "/dashboard", name: "Dashboard", icon: "LayoutDashboard" },
              { path: "/users", name: "Users", icon: "Users" },
              { path: "/add-product", name: "Products", icon: "Package" },
              { path: "/notifications", name: "Alerts", icon: "Bell" },
              { path: "/sustainability", name: "Sustainability", icon: "Leaf" },
              { path: "/purchase-suggestions", name: "Suggestions", icon: "Lightbulb" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                <span className="text-current">{link.name}</span>
              </Link>
            ))}

            <div className="pt-4 border-t mt-2">
              {isAdminAuthenticated ? (
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                    navigate("/login");
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                  </svg>
                  Sign out
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/login");
                    }}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 mb-2"
                  >
                    Sign in
                  </button>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/signup");
                    }}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-600 bg-indigo-100 hover:bg-indigo-200"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  </nav>
);
};

export default Navbar;
