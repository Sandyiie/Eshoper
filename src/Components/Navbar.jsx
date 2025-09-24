import React, { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { userContext } from "../context/UserContext";
import Footer from "./Footer";
import ScrollToTop from "../context/ScrollToTop";

const Navbar = () => {
  const { user, setUser, setCart, cart } = useContext(userContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(false);
    setCart([]);
    localStorage.removeItem("user");
    navigate("/");
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 transition"
      : "text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition";

  return (
    <>
      <ScrollToTop />
      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="flex items-center justify-between px-18 py-4 md:py-5">
          <div className="flex items-center gap-8 font-medium text-lg">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/products" className={linkClass}>
              Products
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About Us
            </NavLink>
            <div className="relative">
              <NavLink to="/cart" className={linkClass}>
                Cart
              </NavLink>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-5 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
                  {cart.length}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-6">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
              >
                Log In
              </button>
            )}
          </div>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
