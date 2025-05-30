import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/slices/authSlice";
import { useState } from "react";

export default function Navbar() {
  const { user } = useSelector(selectAuth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full h-16 bg-white fixed top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center font-bold text-xl sm:text-2xl">
              <span className="text-green-500">Green</span>
              <span className="text-blue-800">Source</span>
              <span className="text-gray-600 text-sm ml-2">Delivery</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {user.username && (
                <>
                  <NavLink 
                    to="/delivery" 
                    className="hover:text-blue-500 text-lg transition-colors duration-200"
                  >
                    Overview
                  </NavLink>
                  <NavLink 
                    to="/delivery/pending" 
                    className="hover:text-blue-500 text-lg transition-colors duration-200"
                  >
                    Pending
                  </NavLink>
                  <NavLink 
                    to="/delivery/active" 
                    className="hover:text-blue-500 text-lg transition-colors duration-200"
                  >
                    Active
                  </NavLink>
                  <NavLink 
                    to="/delivery/completed" 
                    className="hover:text-blue-500 text-lg transition-colors duration-200"
                  >
                    Completed
                  </NavLink>
                </>
              )}
              <NavLink
                to={user.username ? "/delivery/profile" : "/login"}
                className="hover:text-blue-500 text-lg transition-colors duration-200"
              >
                {user.username ? (
                  <span>{user.username}</span>
                ) : (
                  <span>Login</span>
                )}
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {user.username && (
                <>
                  <NavLink
                    to="/delivery"
                    className="block px-3 py-2 text-base hover:text-blue-500 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Overview
                  </NavLink>
                  <NavLink
                    to="/delivery/pending"
                    className="block px-3 py-2 text-base hover:text-blue-500 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pending Deliveries
                  </NavLink>
                  <NavLink
                    to="/delivery/active"
                    className="block px-3 py-2 text-base hover:text-blue-500 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Active Deliveries
                  </NavLink>
                  <NavLink
                    to="/delivery/completed"
                    className="block px-3 py-2 text-base hover:text-blue-500 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Completed Deliveries
                  </NavLink>
                </>
              )}
              <NavLink
                to={user.username ? "/delivery/profile" : "/login"}
                className="block px-3 py-2 text-base hover:text-blue-500 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {user.username ? (
                  <span>{user.username}</span>
                ) : (
                  <span>Login</span>
                )}
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
